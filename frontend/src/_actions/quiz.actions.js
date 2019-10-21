import { quizConstants } from '../_constants';
import { quizService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const quizActions = {
  getQuiz,
  submitQuiz,
  getQuizes,
};

function getQuiz(quizId){
  return dispatch => {
    quizService.getQuiz(quizId)
        .then(
            quiz => { 
              dispatch(success(quiz))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(quiz) { return { type: quizConstants.GET_QUIZ, quiz } }
  function failure(error) { return { type: quizConstants.GET_QUIZ_FAILURE, error } }
}

function submitQuiz(quizId,answers){
  return dispatch => {
    quizService.submitQuiz(quizId,answers)
        .then(
            result => { 
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: quizConstants.GET_QUIZES, result } }
  function failure(error) { return { type: quizConstants.GET_QUIZES_FAILURE, error } }
}

function getQuizes(){
  return dispatch => {
    quizService.getQuizes()
        .then(
            result => { 
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: quizConstants.GET_QUIZES, result } }
  function failure(error) { return { type: quizConstants.GET_QUIZES_FAILURE, error } }
}