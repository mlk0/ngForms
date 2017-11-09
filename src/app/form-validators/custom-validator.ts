import { FormControl } from "@angular/forms";
import { isBlank } from "@angular/core/src/facade/lang";

export class CustomValidator {


    static startsWithUpperCaseValidator(fc:FormControl) : {[x:string] : boolean}
    {
        var value = fc.value as string;
  
        if(isBlank(value) || value == ""){
            return { "startsWithUpperCase": true }
        }
        else
        {
            var firstCharacter = value.charAt(0);
            if (firstCharacter) 
            {
                let isItLetter = firstCharacter.toUpperCase() != firstCharacter.toLocaleLowerCase();
                if (isItLetter) {
                    let isUpperCaseLetter = firstCharacter == firstCharacter.toUpperCase();
                    if(!isUpperCaseLetter)
                    {
                        return { "startsWithUpperCase": true }
                    }
                }
                else
                {
                    return { "startsWithUpperCase": true }
                }
            }
            else
            {
                return { "startsWithUpperCase": true }
            }
        }
        return null;
    }



    static mustBeEven(fc:FormControl) : {[s:string]:boolean}{
        
        let value = fc.value as number;
        if(value){
            
            let reminderWhenDevidedByTwo = value % 2;
            if(reminderWhenDevidedByTwo != 0){
                return {"isEven" : true}
            }

        }

        return null;
    }

  
 

}
