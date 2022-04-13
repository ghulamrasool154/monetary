import React, { useState } from 'react'
import '../signup/sign.css'
import { BsExclamationLg, BsFacebook, BsWhatsapp, BsTwitter, BsFillEnvelopeFill, BsFillPlusSquareFill, BsSearch } from "react-icons/bs";

import { PopupData } from './PopupData';
const Sign = () => {

    const [succes, setsucces] = useState(false);
    const [hide, show] = useState(false);
    const [fisrname, setFirstname] = useState(false);
    const [lastname, setLastname] = useState(false);
    const [State, setState] = useState(false);
    const [Email, setEmail] = useState(false);


    const _userFname = (e) => {
        let item = e.target.value;
        if (item.length < 2) {
            setFirstname(true);
        }
        else {
            setFirstname(false)
        }
        console.log(e.target.value);
    }
    const _userLname = (e) => {
        let item = e.target.value;
        if (item.length < 2) {
            setLastname(true);
        }
        else {
            setLastname(false)
        }
        console.log(e.target.value);
    }
    const _userState = (e) => {
        let item = e.target.value;
        if (item.length < 2) {
            setState(true);
        }
        else {
            setState(false)
        }
        console.log(e.target.value);
    }
    const _userEmail = (e) => {
        let item = e.target.value;
        if (item.length < 2) {
            setEmail(true);
        }
        else {
            setEmail(false)
        }
        console.log(e.target.value);
    }

    const _hanldeSubmilt = (e) => {
        e.preventDefault();
        setsucces(true)
    }


    return (
        <>
            <section id='sign'>

                <div className="container">
                    <div className="row ">
                        <div className="col-lg-10 m-auto">
                            <h1>Sign the Declaration
                            </h1>

                            <form onSubmit={_hanldeSubmilt}>
                                <div className='signform d-flex flex-wrap '>
                                    <div className='form-div d-flex w-50 position-relative flex-column'>
                                        <label htmlFor=""> First Name <span style={{ color: 'red' }}>*</span>  </label>

                                        <input
                                            type="text"
                                            className='form-control'
                                            name='firstname'
                                            placeholder='First Name'

                                            onChange={(e) => _userFname(e)}


                                        /> {fisrname ? <> <span className='red'> <BsExclamationLg /> </span>
                                            <span className='required'> This is a required field.
                                            </span></> : ''}
                                    </div>

                                    <div className='form-div d-flex w-50 position-relative flex-column'>
                                        <label htmlFor=""> Last Name  <span style={{ color: 'red' }}>*</span>  </label>
                                        <input
                                            type="text"
                                            className='form-control'


                                            onChange={(e) => _userLname(e)}


                                            placeholder='Last Name '
                                            name='lastname' /> {lastname ? <> <span className='red'> <BsExclamationLg />
                                            </span>
                                                <span className='required'> This is a required field.
                                                </span></> : ''}
                                    </div>

                                    <div className='form-div d-flex w-50 position-relative flex-column'>
                                        <label htmlFor=""> Your Country<span style={{ color: 'red' }}>*</span>  </label>
                                        <select >
                                            <option value="">- Select Country -</option>


                                            <option value="AF">Afghanistan</option>


                                            <option value="AL">Albania</option>


                                            <option value="DZ">Algeria</option>


                                            <option value="AS">American Samoa</option>


                                            <option value="AD">Andorra</option>


                                            <option value="AO">Angola</option>


                                            <option value="AI">Anguilla</option>


                                            <option value="AQ">Antarctica</option>


                                            <option value="AG">Antigua And Barbuda</option>


                                            <option value="AR">Argentina</option>


                                            <option value="AM">Armenia</option>


                                            <option value="AW">Aruba</option>


                                            <option value="AU">Australia</option>


                                            <option value="AT">Austria</option>


                                            <option value="AZ">Azerbaijan</option>


                                            <option value="BS">Bahamas</option>


                                            <option value="BH">Bahrain</option>


                                            <option value="BD">Bangladesh</option>


                                            <option value="BB">Barbados</option>


                                            <option value="BY">Belarus</option>


                                            <option value="BE">Belgium</option>


                                            <option value="BZ">Belize</option>


                                            <option value="BJ">Benin</option>


                                            <option value="BM">Bermuda</option>


                                            <option value="BT">Bhutan</option>


                                            <option value="BO">Bolivia</option>


                                            <option value="BA">Bosnia And Herzegowina</option>


                                            <option value="BW">Botswana</option>


                                            <option value="BV">Bouvet Island</option>


                                            <option value="BR">Brazil</option>


                                            <option value="IO">British Indian Ocean Territory</option>


                                            <option value="BN">Brunei Darussalam</option>


                                            <option value="BG">Bulgaria</option>


                                            <option value="BF">Burkina Faso</option>


                                            <option value="BI">Burundi</option>


                                            <option value="KH">Cambodia</option>


                                            <option value="CM">Cameroon</option>


                                            <option value="CA">Canada</option>


                                            <option value="CV">Cape Verde</option>


                                            <option value="KY">Cayman Islands</option>


                                            <option value="CF">Central African Republic</option>


                                            <option value="TD">Chad</option>


                                            <option value="CL">Chile</option>


                                            <option value="CN">China</option>


                                            <option value="CX">Christmas Island</option>


                                            <option value="CC">Cocos (Keeling) Islands</option>


                                            <option value="CO">Colombia</option>


                                            <option value="KM">Comoros</option>


                                            <option value="CG">Congo</option>


                                            <option value="CD">Congo, The Democratic Republic Of The</option>


                                            <option value="CK">Cook Islands</option>


                                            <option value="CR">Costa Rica</option>


                                            <option value="CI">Cote D'Ivoire</option>


                                            <option value="HR">Croatia (Local Name: Hrvatska)</option>


                                            <option value="CU">Cuba</option>


                                            <option value="CY">Cyprus</option>


                                            <option value="CZ">Czech Republic</option>


                                            <option value="DK">Denmark</option>


                                            <option value="DJ">Djibouti</option>


                                            <option value="DM">Dominica</option>


                                            <option value="DO">Dominican Republic</option>


                                            <option value="EC">Ecuador</option>


                                            <option value="EG">Egypt</option>


                                            <option value="SV">El Salvador</option>


                                            <option value="GQ">Equatorial Guinea</option>


                                            <option value="ER">Eritrea</option>


                                            <option value="EE">Estonia</option>


                                            <option value="ET">Ethiopia</option>


                                            <option value="FK">Falkland Islands (Malvinas)</option>


                                            <option value="FO">Faroe Islands</option>


                                            <option value="FJ">Fiji</option>


                                            <option value="FI">Finland</option>


                                            <option value="FR">France</option>


                                            <option value="FX">France, Metropolitan</option>


                                            <option value="GF">French Guiana</option>


                                            <option value="PF">French Polynesia</option>


                                            <option value="TF">French Southern Territories</option>


                                            <option value="GA">Gabon</option>


                                            <option value="GM">Gambia</option>


                                            <option value="GE">Georgia</option>


                                            <option value="DE">Germany</option>


                                            <option value="GH">Ghana</option>


                                            <option value="GI">Gibraltar</option>


                                            <option value="GR">Greece</option>


                                            <option value="GL">Greenland</option>


                                            <option value="GD">Grenada</option>


                                            <option value="GP">Guadeloupe</option>


                                            <option value="GU">Guam</option>


                                            <option value="GT">Guatemala</option>


                                            <option value="GN">Guinea</option>


                                            <option value="GW">Guinea-Bissau</option>


                                            <option value="GY">Guyana</option>


                                            <option value="HT">Haiti</option>


                                            <option value="HM">Heard And Mc Donald Islands</option>


                                            <option value="VA">Holy See (Vatican City State)</option>


                                            <option value="HN">Honduras</option>


                                            <option value="HK">Hong Kong</option>


                                            <option value="HU">Hungary</option>


                                            <option value="IS">Iceland</option>


                                            <option value="IN">India</option>


                                            <option value="ID">Indonesia</option>


                                            <option value="IR">Iran (Islamic Republic Of)</option>


                                            <option value="IQ">Iraq</option>


                                            <option value="IE">Ireland</option>


                                            <option value="IL">Israel</option>


                                            <option value="IT">Italy</option>


                                            <option value="JM">Jamaica</option>


                                            <option value="JP">Japan</option>


                                            <option value="JO">Jordan</option>


                                            <option value="KZ">Kazakhstan</option>


                                            <option value="KE">Kenya</option>


                                            <option value="KI">Kiribati</option>


                                            <option value="KP">Korea, Democratic People's Republic Of</option>


                                            <option value="KR">Korea, Republic Of</option>


                                            <option value="KW">Kuwait</option>


                                            <option value="KG">Kyrgyzstan</option>


                                            <option value="LA">Lao People's Democratic Republic</option>


                                            <option value="LV">Latvia</option>


                                            <option value="LB">Lebanon</option>


                                            <option value="LS">Lesotho</option>


                                            <option value="LR">Liberia</option>


                                            <option value="LY">Libyan Arab Jamahiriya</option>


                                            <option value="LI">Liechtenstein</option>


                                            <option value="LT">Lithuania</option>


                                            <option value="LU">Luxembourg</option>


                                            <option value="MO">Macau</option>


                                            <option value="MK">Macedonia, Former Yugoslav Republic Of</option>


                                            <option value="MG">Madagascar</option>


                                            <option value="MW">Malawi</option>


                                            <option value="MY">Malaysia</option>


                                            <option value="MV">Maldives</option>


                                            <option value="ML">Mali</option>


                                            <option value="MT">Malta</option>


                                            <option value="MH">Marshall Islands</option>


                                            <option value="MQ">Martinique</option>


                                            <option value="MR">Mauritania</option>


                                            <option value="MU">Mauritius</option>


                                            <option value="YT">Mayotte</option>


                                            <option value="MX">Mexico</option>


                                            <option value="FM">Micronesia, Federated States Of</option>


                                            <option value="MD">Moldova, Republic Of</option>


                                            <option value="MC">Monaco</option>


                                            <option value="MN">Mongolia</option>


                                            <option value="ME">Montenegro</option>


                                            <option value="MS">Montserrat</option>


                                            <option value="MA">Morocco</option>


                                            <option value="MZ">Mozambique</option>


                                            <option value="MM">Myanmar</option>


                                            <option value="NA">Namibia</option>


                                            <option value="NR">Nauru</option>


                                            <option value="NP">Nepal</option>


                                            <option value="NL">Netherlands</option>


                                            <option value="AN">Netherlands Antilles</option>


                                            <option value="NC">New Caledonia</option>


                                            <option value="NZ">New Zealand</option>


                                            <option value="NI">Nicaragua</option>


                                            <option value="NE">Niger</option>


                                            <option value="NG">Nigeria</option>


                                            <option value="NU">Niue</option>


                                            <option value="NF">Norfolk Island</option>


                                            <option value="MP">Northern Mariana Islands</option>


                                            <option value="NO">Norway</option>


                                            <option value="OM">Oman</option>


                                            <option value="PK">Pakistan</option>


                                            <option value="PW">Palau</option>


                                            <option value="PA">Panama</option>


                                            <option value="PG">Papua New Guinea</option>


                                            <option value="PY">Paraguay</option>


                                            <option value="PE">Peru</option>


                                            <option value="PH">Philippines</option>


                                            <option value="PN">Pitcairn</option>


                                            <option value="PL">Poland</option>


                                            <option value="PT">Portugal</option>


                                            <option value="PR">Puerto Rico</option>


                                            <option value="QA">Qatar</option>


                                            <option value="RE">Reunion</option>


                                            <option value="RO">Romania</option>


                                            <option value="RU">Russian Federation</option>


                                            <option value="RW">Rwanda</option>


                                            <option value="KN">Saint Kitts And Nevis</option>


                                            <option value="LC">Saint Lucia</option>


                                            <option value="VC">Saint Vincent And The Grenadines</option>


                                            <option value="WS">Samoa</option>


                                            <option value="SM">San Marino</option>


                                            <option value="ST">Sao Tome And Principe</option>


                                            <option value="SA">Saudi Arabia</option>


                                            <option value="SN">Senegal</option>


                                            <option value="RS">Serbia</option>


                                            <option value="SC">Seychelles</option>


                                            <option value="SL">Sierra Leone</option>


                                            <option value="SG">Singapore</option>


                                            <option value="SK">Slovakia (Slovak Republic)</option>


                                            <option value="SI">Slovenia</option>


                                            <option value="SB">Solomon Islands</option>


                                            <option value="SO">Somalia</option>


                                            <option value="ZA">South Africa</option>


                                            <option value="GS">South Georgia, South Sandwich Islands</option>


                                            <option value="ES">Spain</option>


                                            <option value="LK">Sri Lanka</option>


                                            <option value="SH">St. Helena</option>


                                            <option value="PM">St. Pierre And Miquelon</option>


                                            <option value="SD">Sudan</option>


                                            <option value="SR">Suriname</option>


                                            <option value="SJ">Svalbard And Jan Mayen Islands</option>


                                            <option value="SZ">Swaziland</option>


                                            <option value="SE">Sweden</option>


                                            <option value="CH">Switzerland</option>


                                            <option value="SY">Syrian Arab Republic</option>


                                            <option value="TW">Taiwan</option>


                                            <option value="TJ">Tajikistan</option>


                                            <option value="TZ">Tanzania, United Republic Of</option>


                                            <option value="TH">Thailand</option>


                                            <option value="TL">Timor-Leste (East Timor)</option>


                                            <option value="TG">Togo</option>


                                            <option value="TK">Tokelau</option>


                                            <option value="TO">Tonga</option>


                                            <option value="TT">Trinidad And Tobago</option>


                                            <option value="TN">Tunisia</option>


                                            <option value="TR">Turkey</option>


                                            <option value="TM">Turkmenistan</option>


                                            <option value="TC">Turks And Caicos Islands</option>


                                            <option value="TV">Tuvalu</option>


                                            <option value="UG">Uganda</option>


                                            <option value="UA">Ukraine</option>


                                            <option value="AE">United Arab Emirates</option>


                                            <option value="GB">United Kingdom</option>


                                            <option value="US" selected="selected">United States</option>


                                            <option value="UM">United States Minor Outlying Islands</option>


                                            <option value="UY">Uruguay</option>


                                            <option value="UZ">Uzbekistan</option>


                                            <option value="VU">Vanuatu</option>


                                            <option value="VE">Venezuela</option>


                                            <option value="VN">Viet Nam</option>


                                            <option value="VG">Virgin Islands (British)</option>


                                            <option value="VI">Virgin Islands (U.S.)</option>


                                            <option value="WF">Wallis And Futuna Islands</option>


                                            <option value="EH">Western Sahara</option>


                                            <option value="YE">Yemen</option>


                                            <option value="YU">Yugoslavia</option>


                                            <option value="ZM">Zambia</option>


                                            <option value="ZW">Zimbabwe</option>
                                        </select>

                                    </div>




                                    <div className='form-div d-flex w-50 position-relative flex-column'>
                                        <label htmlFor=""> Your State/Province *  <span style={{ color: 'red' }}>*</span>  </label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            onChange={(e) => _userState(e)} placeholder='Your State/Province *'
                                            name='state'
                                        />
                                        {
                                            State ? <><span className='red'> <BsExclamationLg /> </span>
                                                <span className='required'> This is a required field.
                                                </span></> : ''
                                        }
                                    </div>

                                    <div className='form-div d-flex w-50 position-relative flex-column'>
                                        <label htmlFor=""> Your Email <span style={{ color: 'red' }}>*</span>  </label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            onChange={(e) => _userEmail(e)}
                                            placeholder='Your Email'
                                            name='email'
                                        /> {Email ? <><span className='red'> <BsExclamationLg /> </span>
                                            <span className='required'> This is a required field.
                                            </span></> : ""}
                                    </div>

                                    <div className='form-div d-flex w-50 position-relative flex-column'>
                                        <label htmlFor=""> Age Group <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select >
                                            <option value="under-18" selected="selected">Under 18</option>


                                            <option value="19-25">19-25</option>


                                            <option value="26-35">26-35</option>


                                            <option value="36-49">36-49</option>


                                            <option value="50-64">50-64</option>


                                            <option value="65-and-older">65 and older</option>
                                        </select>



                                    </div>
                                    <div className='form-div d-flex w-50 position-relative flex-column'>
                                        <label htmlFor=""> Twitter Link
                                        </label>
                                        <input type="text" className='form-control' name="" id="" placeholder='@YourHandler' />
                                    </div>

                                    <div className='form-div d-flex w-100 position-relative flex-column'>
                                        <label htmlFor=""> Consent
                                        </label>
                                        <p>
                                            <input type="checkbox" required='true' />
                                            <span>I agree to the privacy policy below.</span>
                                        </p>

                                        <b>
                                            Please read the following privacy policy statements before signing.
                                        </b>

                                        <ul className=''>
                                            <li>Your submitted information will be stored on the website. </li>

                                            <li>
                                                None of your personal information will be publicly displayed or disclosed.
                                            </li>

                                            <li>
                                                All transmitted personal data is protected and will not be shared with any other parties.
                                            </li>

                                            <li>
                                                Any removal requests from the website must come from the email used to sign and will be completed within 30 days.
                                            </li>
                                        </ul>


                                    </div>


                                    <button className='btn-custom float-start ' style={{
                                        padding: '10px 40px'
                                    }}>Sign</button>


                                    {
                                        succes ? '' :
                                            <span className='required w-100 my-5'>Please correct errors before submitting this form.</span>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <section id='socialmedia' className='container-fluid mb-5'>
                <div className="row">
                    <div className="col-lg-">

                        <div className='socialmeidalink'>
                            <a href=""> <span className='sociallink facebook'> <BsFacebook style={{ backgroundColor: '#1877F2' }} /></span></a>

                            <a href=""><span className='sociallink twitter'  > <BsTwitter style={{ backgroundColor: '#1D9BF0' }} /></span></a>
                            <a href=""> <span className='sociallink email'> <BsFillEnvelopeFill style={{ backgroundColor: '#0166FF' }} /></span></a>
                            <a href=""><span className='sociallink whatsapp' >
                                <BsWhatsapp style={{ backgroundColor: '#0D9A15' }} /></span></a>
                            <span className='sociallink' onClick={() => show(!hide)} > <BsFillPlusSquareFill style={{ backgroundColor: '#0166FF' }} /> </span>
                        </div>
                        {
                            hide ?
                                <div className='socialmediaservice' onClick={() => show(!hide)} >

                                    <div className="a2a_full">
                                        <div id="a2apage_find_container" class="a2a_menu_find_container">

                                            <input id="a2apage_find" className="a2a_menu_find a2a_localize" type="text" autocomplete="off" title="Find any service" data-a2a-localize="title,FindAnyServiceToAddTo" />
                                            <span id="a2apage_find_icon" class="a2a_svg a2a_s_find">
                                                <BsSearch />

                                            </span>
                                        </div>
                                        <div className="a2a_full_services" id="a2apage_full_services" role="presentation" style={{ height: 'calc(100% - 88px)', overflowY: 'scroll', paddingTop: '10px' }}>


                                            {
                                                PopupData.map((value, index) => {
                                                    return <a key={index} className='a2a_i' href={value.href} target={value.target}>  {value.title}</a>
                                                })
                                            }


                                        </div>

                                    </div>
                                </div> : ''
                        }
                    </div>
                </div>

            </section>




            <div className='socialmeidalink sidbaricons'>
                <a href=""> <span className='sociallink facebook'> <BsFacebook style={{ backgroundColor: '#1877F2' }} /></span></a>

                <a href=""><span className='sociallink twitter'  > <BsTwitter style={{ backgroundColor: '#1D9BF0' }} /></span></a>
                <a href=""> <span className='sociallink email'> <BsFillEnvelopeFill style={{ backgroundColor: '#0166FF' }} /></span></a>
                <a href=""><span className='sociallink whatsapp' >
                    <BsWhatsapp style={{ backgroundColor: '#0D9A15' }} /></span></a>
                <span className='sociallink' onClick={() => show(!hide)} > <BsFillPlusSquareFill style={{ backgroundColor: '#0166FF' }} /> </span>
            </div>
        </>
    )
}

export default Sign