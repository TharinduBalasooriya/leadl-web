import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket?: WebSocket;
  private listener: EventEmitter<any> = new EventEmitter();

  constructor() {


  }

  public createSocket(fileId: string | null){
    this.socket = new WebSocket("wss://leadl-backend.herokuapp.com/ws?regId="+fileId);
    this.socket.onopen = event => {
      this.listener.emit({"type": "open", "data": event});
    }


    this.socket.onclose = event => {
      this.listener.emit({"type": "close", "data": event});
    }

    this.socket.onmessage = event => {
      this.listener.emit({"type": "message", "data": JSON.parse(event.data)});
      console.log(JSON.parse(event.data))
    }
  }

  public send(data: string) {
   //@ts-ignore
    this.socket.send(data);
  }

  public close() {
    // @ts-ignore
    this.socket.close();
  }

  public getEventListener() {
    return this.listener;
  }
}
