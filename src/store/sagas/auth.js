import {put, takeEvery, call} from 'redux-saga/effects';
import firebase from 'firebase/app'
import {collection} from '../../firebase';
import {setValue, fetchCards} from '../actions/action'

export function* loginSaga(action){
    // yield put({
    //     type: 
    // })

}

function* saveCard(data) {
    console.log("test saga");
    try {
    //   yield firebase.database().ref("Users/post").push({ user: "aaaa", title: "ffff", description: "dsfdfdfdfff" })
      yield collection.add(data.val)
    } catch(err) {
      console.log('Error!:', err);
    }
}

function* getCards(){
    console.log("get test");
    try {
        const cards = yield collection.get().then(function(snapshot){
                let cardsList = [{title: "nana", user: "mama", description: "nafa"}];
                snapshot.forEach(function(childSnapshot){
                    //console.log(snapshot.docs);
                    let title = childSnapshot.data().title;
                    let description = childSnapshot.data().description;
                    let user = childSnapshot.data().user;
                    cardsList.push({title: title, user: user, description: description})
                    
                })
                return cardsList
            })
        // });
        console.log(cards);
        yield put(fetchCards(cards))
    } catch (error) {
        console.log('errr', error);
    }
}

function* rootSaga(){
    yield takeEvery('ADD_CARD', saveCard);
    yield takeEvery('RANDOM_NAME', getCards);
}

export default rootSaga;

