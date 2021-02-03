import React from "react";
import loadBar1 from "../../Assets/loadBar1.png"
import loadBar2 from "../../Assets/loadBar2.png"
import loadBar3 from "../../Assets/loadBar3.png"


const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    posts: [
        {
            id: 1,
            date: " 13 октября 2011",
            message: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ",
            name: "Самуил"
        }, {
            id: 2,
            date: "14 октября 2011",
            message: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами? ",
            name: "Лилия Семёновна"
        }, {
            id: 3,
            date: "14 октября 2011",
            message: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент? ",
            name: "Лилия Семёновна"
        },
    ],
    likes: {
        count: "131"
    },
    comments: {
        count: "14"
    },
    services: [{
        id: 1,
        name: "Ручное бронирование",
        count: "11",
        img: loadBar1
    }, {
        id: 2,
        name: "Пакетные туры",
        count: "3",
        img: loadBar2
    }, {
        id: 3,
        name: "Отели",
        count: "1",
        img: loadBar3
    },],
    newMessageBody: ""
};


const postReducer = (state = initialState, action) => {

        switch (action.type) {
            case UPDATE_NEW_MESSAGE_BODY :
                return {
                    ...state,
                    newMessageBody: action.body
                };

            case SEND_MESSAGE :
                let body = state.newMessageBody;
                if (state.newMessageBody.length !==0 ){
                return {
                    ...state,
                    newMessageBody: "",
                    posts: [...state.posts, {id: 4, message: body,date:"02 февраля 2020", name: "Юрий" }]
                }};

            default:
                return state;
        }
    };

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default postReducer;