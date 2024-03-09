import {useState} from "react";

export default function GeneralInfo({data, setData, editMode, setEditMode}) {

    const fields = [{toShow: "First Name", key: "name"},
                                                {toShow:"Last Name", key: "lastName"},
                                                {toShow:"Email", key:"email"},
                                                {toShow:"Phone", key: "phone"}]

    const handleOnChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }


    return(
        <div>
            {editMode &&
                <>
                    <form>
                        <label htmlFor="name">First Name: </label>
                        <input type="text" name="name" id="name" onChange={handleOnChange} value={data.name}></input>
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" name="lastName" id="lastName" onChange={handleOnChange} value={data.lastName}></input>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="name" onChange={handleOnChange} value={data.email}></input>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" name="phone" id="phone" onChange={handleOnChange} value={data.phone}></input>
                    </form>

                </>
            }
            {!editMode &&
                <div className="sectionDivi">
                    {fields.map((field) => {
                        return (
                            <div key={field.key}>
                                <h4>
                                    {field.toShow}:
                                </h4>
                                <p>{data[field.key]}</p>
                            </div>
                        )
                    })}
                </div>
            }

            <input type="submit" className="save" value={editMode ? "Save" : "Edit"} onClick={() => {
                setEditMode(!editMode)
            }}>
            </input>

        </div>
    )
}