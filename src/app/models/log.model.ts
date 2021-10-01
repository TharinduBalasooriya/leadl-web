export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}



export interface  LogModel {

  username: string,
  projectid:string,
  logfilename:string,
  lastupdate:string
  fileId:string


}


export interface  LogModelJSON extends LogModel{

  _id:string
}


export interface LogModelMongoDB extends  LogModel{
  //_id:mon
}

