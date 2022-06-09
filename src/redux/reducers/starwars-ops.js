import { GET_STAR_WAR_LIST_BEGIN, GET_STAR_WAR_LIST_SUCCESS, GET_STAR_WAR_LIST_FAILED, GET_STAR_WAR_INFO_BEGIN, GET_STAR_WAR_INFO_SUCCESS, GET_STAR_WAR_INFO_FAILED,
  GET_FILMS_INFO_FAILED,GET_FILMS_INFO_SUCCESS} from '../constant'

  
  const initialstate = {
    loading: false,
    starwarsList: [],
    error: '',
    starwarInfo: {},
    filmsInfo:null
  };
  const starWarsData = (state = initialstate, action) => {
    switch (action.type) {
      case GET_STAR_WAR_LIST_BEGIN:
        return {...state, loading: action.isLoading};
      case GET_STAR_WAR_LIST_SUCCESS:
        console.log("results",action.payload)
        return {
          ...state,
          starwarsList: [...new Set ([...state.starwarsList, ...action.payload.results ])],
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

      case GET_FILMS_INFO_SUCCESS:
        return {
          ...state,
          filmsInfo: action.payload,
          loading: false,
        };
      case GET_FILMS_INFO_FAILED:
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