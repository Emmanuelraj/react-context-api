import React, { Component } from 'react';

export const bookReducer =( state , action)=>{
    switch(action.type){
         case 'ADD_BOOK':
             return [...state, {title: action.book.}]

    }
}