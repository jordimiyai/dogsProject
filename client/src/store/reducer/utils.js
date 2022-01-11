import { isUuid } from 'uuidv4';

export default function uuidValidate(id){
    return isUuid(id) ? 'created' : 'original'; 
}
