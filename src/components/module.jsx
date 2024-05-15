import React, { useState, useEffect } from "react";
import "../styles/module.css";

export default function Module({ closeModule }) {
    // State variables to store form data
    const [companyName, setCompanyName] = useState("");
    const [users, setUsers] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [classValue, setClassValue] = useState("A");
    const [countryList, setCountryList] = useState([]);

    // Function to fetch list of countries
const fetchCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
            const data = await response.json();
            // Extract country names from the response
            const countries = data.map((country) => country.name.common);
            setCountryList(countries);
        } else {
            console.error("Failed to fetch countries");
        }
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
};


    // Fetch list of countries on component mount
    useEffect(() => {
        fetchCountries();
    }, []);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare data for submission
        const formData = {
            companyName,
            users,
            firstName,
            lastName,
            city,
            country,
            classValue
        };
        // Make POST request
        try {
            const response = await fetch("https://csms-backend.vercel.app/api/language-schools", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            // Handle response
            if (response.ok) {
                // Data successfully added
                alert("New entry added successfully!");
                // Close the module or perform any other action
                closeModule();
                window.location.reload();
            } else {
                // Error occurred while adding data
                alert("Error adding new entry. Please try again later.");
            }
        } catch (error) {
            console.error("Error adding new entry:", error);
            alert("Error adding new entry. Please try again later.");
        }
    };

    return (
        <div
            className="module-container"
            onClick={(e) => {
                if (e.target.className === "module-container") closeModule();
            }}
        >
            <div className="module">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="school">School Name</label>
                        <input
                            type="text"
                            id="school"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="users">Users</label>
                        <input
                            type="text"
                            id="users"
                            value={users}
                            onChange={(e) => setUsers(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Director first name</label>
                        <input
                            type="text"
                            id="name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Director last name</label>
                        <input
                            type="text"
                            id="surname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="">Select a country</option>
                            {countryList.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Classification</label>
                        <select
                            id="class"
                            value={classValue}
                            onChange={(e) => setClassValue(e.target.value)}
                        >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
