import Response from "../models/response";
import axios from "axios";


export default class UseApis {
  private static baseURL: string = `https://161.35.49.180:3001/api`;

  public static async getAll<T>(url: string): Promise<Response> {
    let res = await axios.get<Array<T>>(this.baseURL + url)
      .then((response: any) => {
        const result = response.data;
        if (result && result.success) {
          return new Response(true, result.data as Array<T>, "Success", "");
        } else {
          const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
          return new Response(false, null, "Error", msg);
        }

      })
      .catch(function (error) {
        return new Response(false, null, "Error", error);
      });
    return res;
  }
  public static get<T>(url: string, param: any): Promise<Response> {
    let res = axios.get<T>(this.baseURL + url + param)
      .then((response: any) => {
        const result = response.data;
        if (result && result.success) {
          return new Response(true, result.data, "Success", "");
        } else {
          const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
          return new Response(false, null, "Error", msg);
        }
      })
      .catch(function (error) {
        return new Response(false, null, "Error", error);
      });
    return res;
  }
  public static delete(url: string, param: any): Promise<Response> {

    let res = axios.delete(this.baseURL + url, { params: {id: param} })
      .then(response => {
        const result = response.data;
        if (result && result.success) {
          return new Response(true, result.data, "Success", "");
        } else {
          const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
          return new Response(false, null, "Error", msg);
        }
      })
      .catch(function (error) {
        return new Response(false, null, "Error", error);
      });
    return res;
  }
  public static create(url: string, obj: any): Promise<Response> {
    let res = axios({
      method: 'post',
      url: this.baseURL + url,
      data: obj,
      headers: { 
        'Content-Type': "multipart/form-data"
      }
    })
    .then(response => {
        const result = response.data;
        if (result && result.success) {
          return new Response(true, result.data, "Success", "");
        } else {
          const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
          return new Response(false, null, "Error", msg);
        }
      })
      .catch(function (error) {
        return new Response(false, null, "Error", error);
      });
    return res;
  }
  public static update(url: string, param: any, obj: any): Promise<Response> {

    let res = axios({
      method: 'post',
      url: this.baseURL + url + param,
      data: obj,
      headers: { 
        'Content-Type': "multipart/form-data"
      }
    })
      .then(response => {
        const result = response.data;
        if (result && result.success) {
          return new Response(true, result.data, "Success", "");
        } else {
          const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
          return new Response(false, null, "Error", msg);
        }
      })
      .catch(function (error) {
        return new Response(false, null, "Error", error);;
      });
    return res;
  }
}