import React, {useState} from "react";
import {Filter2} from "./Filter2";

type FilterType='all'|'dollar'|'rub'


 const Filter = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>("all")

    let currentMoney = money

     if (filter === 'dollar') {
         currentMoney = money.filter((filteredMoney) => filteredMoney.banknots == 'dollar');
     }
     if(filter==='rub'){  //если nameButoon ==='ruble'
         currentMoney = money.filter((filteredMoney) => filteredMoney.banknots == 'ruble')
     }

    const onClickFilterHandler = (nameButton: FilterType) => {
      setFilter(nameButton)

    }

    return (
        <Filter2  onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>
    )
}
export default Filter;