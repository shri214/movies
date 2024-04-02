import { Collection, INCREMENT, DECREMENT, RESET, FILTER } from './actionType';
import {collectionList} from '../reducer/collectionList'
import { IData } from '../reducer/collectionList';

let arr=collectionList()

export const selectCollection = () => {
  console.log(1, "selection");
  return {
    type: Collection,
    payload: arr,
  };
};

export const increment=(val:number)=>{
return {
  type:INCREMENT,
  payload:val,
}
}
export const decrement=(val:number)=>{
return {
  type:DECREMENT,
  payload:val,
}
}
export const reset=(val:number)=>{
return {
  type:RESET,
  payload:val,
}
}
export const filter=(val:IData[])=>{
  console.log("filter");
  return {
    type: FILTER,
    payload:val,
  }
}