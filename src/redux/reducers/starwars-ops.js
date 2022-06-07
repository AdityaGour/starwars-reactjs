import { GET_STAR_WAR_LIST_BEGIN, GET_STAR_WAR_LIST_SUCCESS, GET_STAR_WAR_LIST_FAILED, GET_STAR_WAR_INFO_BEGIN, GET_STAR_WAR_INFO_SUCCESS, GET_STAR_WAR_INFO_FAILED} from '../constant'

  
  const initialstate = {
    loading: false,
    starwarsList: [],
    error: '',
    starwarInfo: {},
  };
  const starWarsData = (state = initialstate, action) => {
    switch (action.type) {
      case GET_STAR_WAR_LIST_BEGIN:
        return {...state, loading: action.isLoading};
      case GET_STAR_WAR_LIST_SUCCESS:
        return {
          ...state,
          starwarsList: action.payload,
          loading: false,
        };
      case GET_STAR_WAR_LIST_FAILED:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case GET_STAR_WAR_INFO_BEGIN:
        return {...state, loading: true};
      case GET_STAR_WAR_INFO_SUCCESS:
        return {
          ...state,
          starwarInfo: action.payload,
          loading: false,
        };
      case GET_STAR_WAR_INFO_FAILED:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default starWarsData;