import React from 'react';
import './dropDownMenu.css';

function DropDownMenu() {
    return (
        <ul className="dropdown">
            <li><a href="https://minjust.gov.ua/str_cent"> Центральний апарат міністерства</a></li>
            <li><a href='https://minjust.gov.ua/str_ter_hr'>Установи та органи юстиції</a></li>
            <li className="arrow"><a href='https://minjust.gov.ua/str_grom_rada/diaylnist-grom-rady-19-21'>Громадська рада при міністерстві юстиції</a>
                <ul className="littledropdown">
                    <li><a href='https://minjust.gov.ua/str_grom_rada/diaylnist-grom-rady-19-21/diyalnist_grom_radu2019'>Діяльність Громадської ради 2019 – 2021</a></li>
                    <li><a href="https://minjust.gov.ua/str_grom_rada/diaylnist-grom-rady-19-21/sklad_gromad_radu">Склад Громадської ради</a></li>
                    <li><a href="https://minjust.gov.ua/str_grom_rada/diaylnist-grom-rady-19-21/keriv_gromad_radu">Керівництво Громадської ради</a></li>
                    <li><a href="https://minjust.gov.ua/str_grom_rada/diaylnist-grom-rady-19-21/struct_gromad_radu">Структура Громадської ради</a></li>
                </ul>
            </li>
            <li className="arrow"><a href="https://minjust.gov.ua/str_ter">Тереторіальні органи</a>
                <ul className="littledropdown">
                    <li><a href='https://minjust.gov.ua/str_ter/terit_org_z_pitan_bankrutstva'>Територіальні органи з питань банкрутства</a></li>
                    <li><a href="https://minjust.gov.ua/str_ter/western_interregional_directorate_of_the_ministryofjustice">Західне міжрегіональне управління Міністерства юстиції (м. Львів)</a></li>
                    <li><a href="https://minjust.gov.ua/str_ter/southwestern_interregional_directorate_of_the_ministry_of_justice">Південно-Західне міжрегіональне управління Міністерства юстиції (м. Івано-Франківськ)</a></li>
                    <li><a href="https://minjust.gov.ua/str_ter/central_interregional_directorate_of_the_ministry_of_justice">Центральне міжрегіональне управління Міністерства юстиції (м. Київ)</a></li>
                </ul>
            </li>
            <li className="arrow"><a href="https://minjust.gov.ua/str_pidvid">Підвідомчі установи та державні підприємства</a>
                <ul className="littledropdown">
                    <li><a href='http://setam.gov.ua/'>Державне підприємство «СЕТАМ»</a></li>
                    <li><a href="https://nais.gov.ua/">Державне підприємство «Національні інформаційні системи»</a></li>
                    <li><a href="https://www.legalaid.gov.ua/">Координаційний центр з надання правової допомоги</a></li>
                </ul>            
            </li>
        </ul>
    )
};

export default DropDownMenu;