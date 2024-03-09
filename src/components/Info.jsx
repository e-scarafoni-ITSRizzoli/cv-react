import {useState} from "react";

export default function Info({baseDataArray, fields, baseDataStructure, data, setData, editMode, setEditMode, id, setId, sectionType = "SectionType"}) {

    function handleId() {
        setId(id + 1)
        return id
    }

    function addSection() {
        const newSection = {...baseDataStructure, id: handleId()}
        setData([...data, newSection])
    }

    function deleteSection(id) {
        setData(data.filter(d => d.id !== id))

    }



    const handleOnChange = (id, e) => {
        console.log("changing " + id + e.target.value)
        setData(data.map(d => {
            if(d.id === id) {
                return {...d, [e.target.name]: e.target.value}
            } else {
                return d;
            }
        }))
        //setData({...data, [e.target.name]: e.target.value})
    }


    return(
        <div className="infoSection">
            {editMode &&
                <>
                    {data.map((f) => {
                        return (
                            <div key={f.id} className="sectionDivi">
                                <h4> {sectionType} {f.id + 1}</h4>
                                <form>
                                    {fields.map((field) => {
                                        return (
                                            <div key={field.key + f.id} className="inputDivi">
                                                <label htmlFor={field.key}> {field.toShow}:</label>
                                                <input type={field.type} id={field.key} name={field.key}
                                                       onChange={() => handleOnChange(f.id, event)} value={data[f.id][field.key]}/>
                                            </div>
                                        )
                                    })}
                                </form>
                                <button className="delete" onClick={() => deleteSection(f.id)}> Delete {sectionType}</button>
                            </div>
                        )
                    })}
                    <button className="addSection" onClick={addSection}> Add {sectionType}</button>
                </>
            }


            {!editMode &&
                data.map((f) => {
                        return (
                            <div key={f.id} className="sectionDivi">
                                <h4> {sectionType} {f.id + 1}</h4>
                                    {fields.map((field) => {
                                        return (
                                            <div key={field.key}>
                                                <h4>
                                                    {field.toShow}:
                                                </h4>
                                                <p>{data[f.id][field.key]}</p>
                                            </div>
                                        )
                                    })}

                            </div>
                        )
                })
            }

            <input type="submit" className="save" value={editMode ? "Save" : "Edit"} onClick={() => {
                setEditMode(!editMode)
            }}>
            </input>

        </div>
    )
}
