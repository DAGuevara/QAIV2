import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { filter, from, map } from 'rxjs';
import { environment } from 'src/Environments/Environments';

const APIKEY = environment.apikey;

declare var $:any;


@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor() { }

readonly configuration = new Configuration({
  apiKey:APIKEY
});

readonly openai = new OpenAIApi(this.configuration)

getDataFromOpenAI(text: string){

  from(this.openai.createCompletion({

    model:'text-davinci-003', 
    prompt: text,
    max_tokens:256,
    temperature:0.7



  })) .pipe(
    filter(resp=>!!resp && !!resp.data),
    
    map(resp=>resp.data),
    filter((data:any)=>(


      
      data.choices && data.choices.length > 0  && data.choices[0].text
      

    )),
    map(data=>data.choices[0].text)


    
    ).subscribe(data=>{

      $('.respuesta').append(`
      <ul class="list-group mb-2">
        <li class="list-group-item bg-primary text-ligth">${data}</li>
        <br>
      </ul>
    `);
    
    })

}

}
