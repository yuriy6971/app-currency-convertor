// import React, {Component} from 'react'
// import s from './navbar.module.css'
// import {connect} from 'react-redux'
// import * as axios from 'axios'
// import {setValuteThunkAC} from '../../redux/convertor_reducer'
// import Element from './Element'
// import BlockElement from './BlockElement'


// class NavBarClass extends React.Component{
//    constructor(props){
//        super(props)
//    }

//    componentDidMount(){
//     if(this.props.valute.length > 0){
//         this.props.ThunkGetValute()
//     //    axios.get("p24api/pubinfo?json&exchange&coursid=5")
//     //    .then(response => {
//     //     console.log(response.data)
//        //})
//     }
      
//    }

//    render() {
//        return <div className = {s.nav}>
        
//            <BlockElement valute = {this.props.valute} isFetching = {this.props.isFetching} />
         

//        </div>
                  
       
//    }
// }
// const mapStateToProps = (state) => {
//     return {
//         valute : state.convertorPage.valute,
//         isfetching : state.convertorPage.isFetching
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//        ThunkGetValute : () => {
//            dispatch(setValuteThunkAC())
//        }
//     }
// }

// const NavBarContainer = connect (mapStateToProps,mapDispatchToProps)(NavBarClass)
// export default NavBarContainer