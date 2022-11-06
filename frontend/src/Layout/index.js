import React, {useEffect, useState} from "react";
import {getDatasSearch, getDataDetail, getDatas} from '../actions'
import {withRouter, useHistory} from "react-router-dom";
import { createStore } from 'redux'
import { useDispatch, useSelector } from "react-redux"
import "./index.scss"
import { Input, Checkbox, Button, Gap, Loading } from "../components"
import { BiArrowBack } from "react-icons/bi"


function PageLayout(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    
    const { loading } = useSelector(state => state?.reducers)
    const { id } = useSelector(state => state?.detail)
    
    const [location, setLocation] = useState('')
    const [desc, setDesc] = useState('')
    const [checked, setChecked] = useState(false)

    const onChangeLocation = (val) => {
        setLocation(val)
    }
    const onChangeDesc = (val) => {
        setDesc(val)
    }
    const onClick = () => {
        dispatch(getDatasSearch({
            location: location,
            description: desc,
            positions: checked
        }))
    }
    const onClickCheckBox = () => {
        if (checked) {
            setChecked(false)
        } else {
            setChecked(true)
        }
    }
      useEffect(() => {
          dispatch(getDatas(1))
      },[])

      useEffect(() => {
          if (id) {
            dispatch(getDataDetail(id))
          }
      },[id])
    
    return (
        <div className="container">
            <div className="header">
                <span className="text">GitHub</span> Jobs
            </div>
            <Gap height={50}/>
            {
                props.location.pathname == "/" ?
                <div className="container_input">
                    <Input value={desc} onChange={onChangeDesc} placeholder="Jobs Description" label="Jobs Description" />
                    <Gap width={60}/>
                    <Input value={location} onChange={onChangeLocation} placeholder="Location" label="Location" />
                    <div style={{ marginTop: 27, display: 'flex'}}>
                        <Checkbox checked={checked} onClick={onClickCheckBox} label="Full Time Only" />
                        <Button onClick={onClick} label="Search" background="#43648a"  height={35} width={200} color="#fff"/>
                    </div>
                </div>
                : <div style={{ cursor : 'pointer', marginLeft: 10 }} onClick={() => history.goBack()} className="container_input">
                    <BiArrowBack color="#909091" size={20}/>
                    <Gap width={5}/>
                    <label className="label">Back</label>
                </div>
            }
            <div style={{ padding: '0px 20px' }}>
                {
                    loading ? <Loading/> : 
                    <div className="cards">
                        <Gap height={30}/>
                        {props.children}
                    </div> 
                }
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default withRouter(PageLayout);