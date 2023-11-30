import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import "./ContributeButton.css";

const SubjectAreaModalComponent = (props) => {

    const allCountryName = [
        { value: 'Algeria', label: 'Algeria' },
        { value: 'Egypt', label: 'Egypt' },
        { value: 'Libya', label: 'Libya' },
        { value: 'Morocco', label: 'Morocco' },
        { value: 'Sudan', label: 'Sudan' },
        { value: 'Tunisia', label: 'Tunisia' },
        { value: 'Angola', label: 'Angola' },
        { value: 'Cameroon', label: 'Cameroon' },
        { value: 'Central African Republic', label: 'Central African Republic' },
        { value: 'Chad', label: 'Chad' },
        { value: 'Congo Republic - Brazzaville', label: 'Congo Republic - Brazzaville' },
        { value: 'Democratic Republic of Congo', label: 'Democratic Republic of Congo' },
        { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
        { value: 'Gabon', label: 'Gabon' },
        { value: 'São Tomé & Principe', label: 'São Tomé & Principe' },
        { value: 'Botswana', label: 'Botswana' },
        { value: 'Lesotho', label: 'Lesotho' },
        { value: 'Namibia', label: 'Namibia' },
        { value: 'South Africa', label: 'South Africa' },
        { value: 'Swaziland', label: 'Swaziland' },
        { value: 'Burundi', label: 'Burundi' },
        { value: 'Comoros', label: 'Comoros' },
        { value: 'Djibouti', label: 'Djibouti' },
        { value: 'Ethiopia', label: 'Ethiopia' },
        { value: 'Eritrea', label: 'Eritrea' },
        { value: 'Kenya', label: 'Kenya' },
        { value: 'Madagascar', label: 'Madagascar' },
        { value: 'Malawi', label: 'Malawi' },
        { value: 'Mauritius', label: 'Mauritius' },
        { value: 'Mozambique', label: 'Mozambique' },
        { value: 'Rwanda', label: 'Rwanda' },
        { value: 'Seychelles', label: 'Seychelles' },
        { value: 'Somalia', label: 'Somalia' },
        { value: 'Tanzania', label: 'Tanzania' },
        { value: 'Uganda', label: 'Uganda' },
        { value: 'Zambia', label: 'Zambia' },
        { value: 'Zimbabwe', label: 'Zimbabwe' },
        { value: 'Benin', label: 'Benin' },
        { value: 'Burkina Faso', label: 'Burkina Faso' },
        { value: 'Cape Verde', label: 'Cape Verde' },
        { value: 'Côte D Ivoire', label: 'Côte D Ivoire' },
        { value: 'Gambia', label: 'Gambia' },
        { value: 'Ghana', label: 'Ghana' },
        { value: 'Guinea', label: 'Guinea' },
        { value: 'Guinea-Bissau', label: 'Guinea-Bissau' },
        { value: 'Liberia', label: 'Liberia' },
        { value: 'Mali', label: 'Mali' },
        { value: 'Mauritania', label: 'Mauritania' },
        { value: 'Niger', label: 'Niger' },
        { value: 'Nigeria', label: 'Nigeria' },
        { value: 'Senegal', label: 'Senegal' },
        { value: 'Sierra Leone', label: 'Sierra Leone' }
    ];
    
      
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            background: "#fff",
            borderColor: "#eaecf0",
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
            // Overwrittes the different states of border
            borderColor: "#eaecf0",
            },
        }),
    };

    const navigate = useNavigate();

    const submitSubAreaUpload = (e) => {
        //
        navigate("/dashboard/contribute-text-upload-sub-area", {
            replace: true,
          });
      };

    return (
        <>
            
            <Modal.Body>
                <form onSubmit={submitSubAreaUpload}>
                    <div className="mb-3">
                        <label className="form-label">
                            Your Country
                        </label>
                        <Select
                            options={allCountryName}
                            styles={customStyles}
                            required
                        />
                    </div>
                    <div className="col col-12">
                        <label className="fw-300 mb-2 cc-input-label form-label">
                            Subject Area Title
                        </label>
                        <input
                            type="text"
                            className="form-control lm-border"
                            required
                        />
                    </div>
                    <div className="col col-12">
                        <label className="fw-300 mb-2 cc-input-label form-label">
                            Author Name
                        </label>
                        <input
                            type="text"
                            className="form-control lm-border"
                            required
                        />
                    </div>
                    
                    <button className="mt-3 btn-next" onClick={submitSubAreaUpload}>
                        Submit
                    </button>

                </form>
            </Modal.Body>
                
        </>
    );
};

export default SubjectAreaModalComponent;
