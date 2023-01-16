import React, {useEffect} from 'react'
import s from './navbar.module.css'
import {connect} from 'react-redux'
import  axios from 'axios'
import BlockElement from './BlockElement'
import Preloader from '../common/Preloader'
import {setValutesActionCreator, setFetchingActionCreator, setValuteActionCreator} from "../../redux/convertor_reducer"


const NavBarFunc = (props) => {
   
    //   useEffect(() => {
    //     props.setFetching(true)
    //     axios.get("p24api/pubinfo?json&exchange&coursid=5")
    //     .then(response => {
    //       props.setValutes(response.data)
    //       props.setFetching(false)
    //     })
    //   },[] )

    useEffect(() => {
      props.setValute()
    }, [])
       
   
       return ( 
       <div className = {s.nav}>
            {props.isFetching && <Preloader />}
           <BlockElement valute = {props.valute} isFetching = {props.isFetching} />  
         

       </div>
                  
        )
   
}
const mapStateToProps = (state) => {
    return {
        valute : state.convertorPage.valute,
        isFetching : state.convertorPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       setValutes : (server_valute) => {
           dispatch(setValutesActionCreator(server_valute))
       },
       setFetching : (boolFetch) => {
        dispatch(setFetchingActionCreator(boolFetch))
       },
       setValute : () => {
        dispatch (setValuteActionCreator())
       }
    }
}

export default  connect (mapStateToProps,mapDispatchToProps)(NavBarFunc)