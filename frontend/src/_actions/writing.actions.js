import { writingConstants } from '../_constants';
import { writingService } from '../_services';

export const writingActions = {
  getWriting,
  submitWriting,
  scoreWriting,
  getnonCompletedAssignments,
  getCompletedAssignments,
  getWritingList,
  getWritingAnnotations,
  clearAnnotations,
  createAnnotation,
  clearNewAnnotations,
  deleteAnnotation,
  clearDeleteAnnotation,
  submitWritingTopic,
  getMyWritings,
  uploadWritingImage,
  createImageAnnotation,
  clearNewImageAnnotations,
  getWritingImageAnnotations,
  clearImageAnnotations,
};

function getWriting(writingId){
  return dispatch => {
    writingService.getWriting(writingId)
        .then(
            writing => { 
              dispatch(success(writing))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(writing) { return { type: writingConstants.GET_WRITING, writing } }
  function failure(error) { return { type: writingConstants.GET_WRITING_FAILURE, error } }
}

function submitWriting(exercise){
  return dispatch => {
    writingService.submitWriting(exercise)
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.SUBMIT_WRITING, result } }
  function failure(error) { return { type: writingConstants.SUBMIT_WRITING_FAILURE, error } }
}

function submitWritingTopic(newTopic){
  return dispatch => {
    writingService.submitWritingTopic(newTopic)
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.SUBMIT_WRITING_TOPIC, result } }
  function failure(error) { return { type: writingConstants.SUBMIT_WRITING_TOPIC_FAILURE, error } }
}

function uploadWritingImage(upload){
  return dispatch => {
    writingService.uploadWritingImage(upload)
        .then(
            upload => {
              dispatch(success(upload))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(upload) { return { type: writingConstants.UPLOAD_SUCCESS, upload } }
  function failure(error) { return { type: writingConstants.UPLOAD_FAILURE, error } }
}

function scoreWriting(IdnScore){
  return dispatch => {
    writingService.scoreWriting(IdnScore)
        .then(
            result => {
              dispatch(success(result));
              getnonCompletedAssignments()(dispatch);
              getCompletedAssignments()(dispatch);
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.SCORE_WRITING, result } }
  function failure(error) { return { type: writingConstants.SCORE_WRITING_FAILURE, error } }
}
function getnonCompletedAssignments(){
  return dispatch => {
    writingService.getnonCompletedAssignments()
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.GET_ASSIGN_WRITING, result } }
  function failure(error) { return { type: writingConstants.GET_ASSIGN_WRITING_FAILURE, error } }
}
function getCompletedAssignments(){
  return dispatch => {
    writingService.getCompletedAssignments()
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.GET_CASSIGN_WRITING, result } }
  function failure(error) { return { type: writingConstants.GET_CASSIGN_WRITING_FAILURE, error } }
}

function getMyWritings(){
  return dispatch => {
    writingService.getMyWritings()
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.GET_MY_WRITINGS, result } }
  function failure(error) { return { type: writingConstants.GET_MY_WRITINGS_FAILURE, error } }
}

function getWritingList(languageId){
  return dispatch => {
    writingService.getWritingList(languageId)
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.GET_WRITING_LIST, result } }
  function failure(error) { return { type: writingConstants.GET_WRITING_LIST_FAILURE, error } }
}

function getWritingAnnotations(writingResultId){
  return dispatch => {
    writingService.getWritingAnnotations(writingResultId)
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.GET_WRITING_ANNOTATIONS, result } }
  function failure(error) { return { type: writingConstants.GET_WRITING_ANNOTATIONS_FAILURE, error } }
}

function clearAnnotations(){
    return dispatch => {
        dispatch(success());
    };

    function success() { return { type: writingConstants.ANNOTATIONS_CLEAR, } }
}

function createAnnotation(writingResultId, text, start,end){
  return dispatch => {
    writingService.createAnnotation(writingResultId, text, start,end)
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.CREATE_WRITING_ANNOTATIONS, result } }
  function failure(error) { return { type: writingConstants.CREATE_WRITING_ANNOTATIONS_FAILURE, error } }
}

function clearNewAnnotations(){
    return dispatch => {
        dispatch(success());
    };

    function success() { return { type: writingConstants.NEW_ANNOTATION_CLEAR, } }
}

function deleteAnnotation(writingResultId){
  return dispatch => {
    writingService.deleteAnnotation(writingResultId)
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.DELETE_ANNOTATION, result } }
  function failure(error) { return { type: writingConstants.DELETE_ANNOTATION_FAILURE, error } }
}

function clearDeleteAnnotation(){
    return dispatch => {
        dispatch(success());
    };

    function success() { return { type: writingConstants.DELETE_ANNOTATION_CLEAR, } }
}

function createImageAnnotation(annotation){
  return dispatch => {
    writingService.createImageAnnotation(annotation)
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.CREATE_WRITING_IMAGE_ANNOTATIONS, result } }
  function failure(error) { return { type: writingConstants.CREATE_WRITING_IMAGE_ANNOTATIONS_FAILURE, error } }
}

function clearNewImageAnnotations(){
    return dispatch => {
        dispatch(success());
    };

    function success() { return { type: writingConstants.NEW_IMAGE_ANNOTATION_CLEAR, } }
}

function getWritingImageAnnotations(imageUrl){
  return dispatch => {
    writingService.getWritingImageAnnotations(imageUrl)
        .then(
            result => {
              dispatch(success(result))
            },
            error => {
              dispatch(failure(error.toString()));
            }
        );
  };
  function success(result) { return { type: writingConstants.GET_WRITING_IMAGE_ANNOTATIONS, result } }
  function failure(error) { return { type: writingConstants.GET_WRITING_IMAGE_ANNOTATIONS_FAILURE, error } }
}

function clearImageAnnotations(){
    return dispatch => {
        dispatch(success());
    };

    function success() { return { type: writingConstants.IMAGE_ANNOTATION_CLEAR, } }
}