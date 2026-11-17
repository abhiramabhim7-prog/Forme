import { Icon } from '@iconify/react'
import React, { useState } from 'react'

function Employ() {
    const [employee, setEmployee] = useState({

        name: "",
        gender: "",
        hobbies: "",
        age: "",
        email: "",
        phone: "",
        experience: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setEmployee((prev) => ({
            ...prev,
            [name]: value,
        }))

        const handelReset = () => {
            setEmployee({
                name: "",
                gender: "",
                hobbies: "",
                age: "",
                email: "",
                phone: "",
                experience: ""

            })
        }
    }
    return (
        <div className="section">
            <div className='Hero'>

                <div className="frm">
                    <form >
                        <label htmlFor="">Name*</label>
                        <input 
                        type="text" 
                        placeholder='Enter full name' 
                        value={employee.name}
                        name='name'
                         onChange={handleChange} />

                        <p>Gender*</p>


                        <label>
                            <input type="radio" name="gender" value={employee.gender} onChange={handleChange} />
                            Male
                        </label>

                        <label >
                            <input type="radio" name="gender" value="female" />

                            Female</label>

                        <label>
                            <input type="radio" name="gender" value="other" />
                            Other</label>

                        <label htmlFor="age" placeholder="Enter age">Age*</label>
                        <input type="date" id='age' name='age' value={employee.age} onChange={handleChange} />

                        <label htmlFor="email"  >Email*</label>
                        <input type="email" name='email' id='email' value={employee.email} onChange={handleChange} required placeholder='Enter email address' />

                        <label htmlFor="phone">Number*</label>
                        <input type="tel" name='phone' placeholder='Phone number' value={employee.phone} onChange={handleChange} max="10" min="10" required />

                        <label htmlFor="address">Address*</label>
                        <input type="textarea" placeholder='Enter preset address' />
                    </form>

                    <button>
                        <Icon icon={"entypo:paper-plane"} />
                        Submit
                    </button>

                </div>

                <div className="side">
                    <form >
                        <label htmlFor="experience">Experience*</label>
                        <input 
                        type="number" 
                        placeholder='Year of experience' 
                        value={employee.experience} 
                        name='experience'
                        onChange={handleChange} />

                        <label htmlFor="files">Upload files* </label>
                        <input type="file" id='file' />





                        <label htmlFor="phone">Whatsapp number*</label>
                        <input type="tel" name='phone' placeholder='Phone number' max="10" min="10" required />

                        <label htmlFor="qualification">Qualification*</label>
                        <input type="text" />

                        <p>Employment*</p>

                        <label htmlFor="">
                            <input type="radio" name='employment' value='fulltime' />
                            Full time
                        </label>
                        <label htmlFor="">
                            <input type="radio" name='employment' value='fulltime' />
                            Part time
                        </label>
                        <label htmlFor="">
                            <input type="radio" name='employment' value='fulltime' />
                            Casual
                        </label>

                        <label htmlFor="job">Field*</label>
                        <select name="job" id="job">
                            <option value="frondend">Frondend developer</option>
                            <option value="uiux">UI/UX Designer</option>
                            <option value="backend">Backend developer</option>
                            <option value="fullstack">Full stack developer</option>
                            <option value="data">Data scientist</option>
                        </select>

                    </form>

                </div>
            </div>
           
        </div>
    )
}

export default Employ
