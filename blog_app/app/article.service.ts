import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from 'angular2/http';
import Article from './article';
import Articleinfo from './articleinfo';

@Injectable()
export class ArticleService {

  constructor(private http: Http) {
  }

  getArticle(id: string){
    return  new Promise((resolve, reject) => {

      const url = "data/articles/" + id + ".html";
      const article = new Article;
      article.id = id;

      const extractData = (res: Response) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('Bad response status: ' + res.status);
        }
        this.getArticleInfos().subscribe((articleInfos: Articleinfo[]) =>{
          let info = articleInfos.filter(article => article.id === id)[0];
          article.title = info.title;
          article.content = res.text();
          resolve(article);
        });
      }

      const handleNotFound = () => {
        article.title = '404 NOT FOUND';
        article.content = '';
        resolve(article);
      };

      this.http.get(url).subscribe(extractData, handleNotFound);
    });
  }

  getArticleInfos (): Observable<Articleinfo[]> {

    const extractData = (res: Response) => {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status);
      }
      return res.json() || { };
    }

    const handleError = (error: any) => {
      let errMsg = error.message || 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

    return this.http.get('data/articles/index.json')
      .map(extractData)
      .catch(handleError);
  }

}
