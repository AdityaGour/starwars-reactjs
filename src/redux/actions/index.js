// export * from './actions';
// import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { api } from '../../api/index';
import { IS_LOADING, GET_STAR_WAR_LIST_BEGIN, GET_STAR_WAR_LIST_SUCCESS, GET_STAR_WAR_LIST_FAILED, GET_STAR_WAR_INFO_BEGIN, GET_STAR_WAR_INFO_SUCCESS, GET_STAR_WAR_INFO_FAILED} from '../constant'


export function isLoading(isLoading = false) {
    return {
      type: IS_LOADING,
      isLoading: isLoading,
    };
  }



export function getStarwarList(id) {
   return  (dispatch) => {
      try {
        dispatch(isLoading(true));
        api.get(`https://swapi.dev/api/people/?page=${id ? id : 1}`)
          .then((response) => {
            // alert(JSON.stringify(response.data));
              dispatch({
                type: GET_STAR_WAR_LIST_SUCCESS,
                payload: response.data,
              });
          })
          .catch((error) => {
            toast.error(error.message);
            dispatch(isLoading(false));
            dispatch({
              type: GET_STAR_WAR_LIST_FAILED,
              errorMessage: error.message
            });
          });
      } catch (error) {
        dispatch(isLoading(false));
        dispatch({
          type: GET_STAR_WAR_LIST_FAILED,
          payload: error.message,
        });
      }
    };
  }



  export function getStarWarInfo(url) {
    return (dispatch) => {
      try {
        // dispatch(isLoading(true));
        api.get(url)
          .then((response) => {
              dispatch({
                type: GET_STAR_WAR_INFO_SUCCESS,
                payload: response.data,
              });

          })
          .catch((error) => {
            toast.error(error.message);
            dispatch(isLoading(false));
            dispatch({
              type: GET_STAR_WAR_INFO_FAILED,
              errorMessage: error.message
            });
          });
      } catch (error) {
        dispatch(isLoading(false));
        dispatch({
          type: GET_STAR_WAR_INFO_FAILED,
          payload: error.message,
        });
      }
    }
  }