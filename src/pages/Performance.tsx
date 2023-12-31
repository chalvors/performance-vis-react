
import { ParallelCoordinateFilled } from "../tools/ParallelCoordinateFilled";

import { useState } from "react";

import { GradeData, students, StudentData, GradeDataItem } from "../mock_data/data";

import { Link } from "react-router-dom";

import '../styles/Performance.css';

export default function Performance() {

    var count = 0;                                              // count for key generation

    const [studentBase, setStudentBase] = useState("all");      // all, atRisk
    const [ethnicity, setEthnicity] = useState("either");       // either, White, Not_White
    const [gender, setGender] = useState("either");             // either, Male, Female
    const [lgbtq, setLgbtq] = useState("either");               // either, true, false
    const [disabled, setDisabled] = useState("either");         // either, true, false
    const [upbringing, setUpbringing] = useState("either");     // either, Rural, Urban
        

    const filterState = {
        studentBase,
        ethnicity,
        gender,
        lgbtq,
        disabled,
        upbringing
    }

    function studentIsAtRisk(student: any) {

        // if last assignment was an F
        if (student[Object.keys(student)[Object.keys(student).length - 1]] < 60) {

            return true;
        }

        return false;
    }

    function filterStudents(students: any, filterState: any) {

        var studentBaseFlagged: StudentData = [];
        var ethnicityFlagged: StudentData = [];
        var genderFlagged: StudentData = [];
        var lgbtqFlagged: StudentData = [];
        var disabledFlagged: StudentData = [];
        var upbringingFlagged: StudentData = [];

        var filteredStudents: StudentData = [];


        //student base
        switch (filterState.studentBase) {

            case "all":

                studentBaseFlagged = students;
                break;

            default:

                students.forEach((student: any) => {

                    if (studentIsAtRisk(student)) {

                        studentBaseFlagged.push(student);
                    }
                });
        }

        //ethnicity
        switch (filterState.ethnicity) {

            case "either":

                ethnicityFlagged = students;
                break;

            default:

                students.forEach((student: any) => {

                    if (student.ethnicity === filterState.ethnicity) {

                        ethnicityFlagged.push(student);
                    }
                })
        }

        //gender
        switch (filterState.gender) {

            case "either":

                genderFlagged = students;
                break;

            default:

                students.forEach((student: any) => {

                    if (student.gender === filterState.gender) {

                        genderFlagged.push(student);
                    }
                })
        }

        //lgbtq
        switch (filterState.lgbtq) {

            case "either":


                lgbtqFlagged = students;
                break;

            default:

                students.forEach((student: any) => {

                    if (student.lgbtq === filterState.lgbtq) {

                        lgbtqFlagged.push(student);
                    }
                })
        }

        //disabled
        switch (filterState.disabled) {

            case "either":

                disabledFlagged = students;
                break;

            default:

                students.forEach((student: any) => {

                    if (student.disabled === filterState.disabled) {

                        disabledFlagged.push(student);
                    }
                })
        }

        //upbringing
        switch (filterState.upbringing) {

            case "either":

                upbringingFlagged = students;
                break;

            default:

                students.forEach((student: any) => {

                    if (student.upbringing === filterState.upbringing) {

                        upbringingFlagged.push(student);
                    }
                })
        }

        students.forEach((student: any) => {

            if ((studentBaseFlagged.includes(student)) &&
                (ethnicityFlagged.includes(student)) &&
                (genderFlagged.includes(student)) &&
                (lgbtqFlagged.includes(student)) &&
                (disabledFlagged.includes(student)) &&
                (upbringingFlagged.includes(student)))  {

                filteredStudents.push(student);
            }
        });
        
        
        return filteredStudents;
    }

    function onlyGrades(students: any) {

        var onlyGrades: GradeData = [];

        students.forEach((student: any) => {

            //make new object for grades
            const gradeItem: any = {

                hw1: student.hw1,
                quiz1: student.quiz1,
                hw2: student.hw2,
                exam1: student.exam1
            };

            onlyGrades.push(gradeItem);
        });

        return onlyGrades;
    }

    const parallelGraph = () => {

        return (
            <ParallelCoordinateFilled
                data={onlyGrades(filterStudents(students, filterState))}  //filtered at risk students grades
                width={1000}
                height={600}
                variables={["hw1", "quiz1", "hw2", "exam1"]}
            />
        )
    }

    const studentBaseFilters = () => {

        return (

            <>
               
                <label >
                    <input type="radio" onClick={() => { setStudentBase("all") }} name="student-base-filter" value="All Students" defaultChecked={true} />

                    All Students
                </label>

                <br></br>

                <label>
                    <input type="radio" onClick={() => { setStudentBase("atRisk") }} name="student-base-filter" value="At Risk Students" />

                    At Risk Students
                </label>
            </>
        )
    }


    const deiFilters = () => {

        //step through students or hard code?

        return (

            <>

                <p><b>Ethnicity: </b></p>

                <label >
                    <input type="radio" name="ethnicity" onClick={() => { setEthnicity("White") }} />

                    White
                </label>

                <label >
                    <input type="radio" name="ethnicity" onClick={() => { setEthnicity("Not_White") }} />

                    Not White
                </label>

                <label >
                    <input type="radio" name="ethnicity" onClick={() => { setEthnicity("either") }} defaultChecked={true} />

                    Either
                </label>

                <br></br>

                <p><b>Gender: </b></p>

                <label >
                    <input type="radio" name="gender" onClick={() => { setGender("Male") }} />

                    Male
                </label>

                <label >
                    <input type="radio" name="gender" onClick={() => { setGender("Female") }} />

                    Female
                </label>

                <label >
                    <input type="radio" name="gender" onClick={() => { setGender("either") }} defaultChecked={true} />

                    Either
                </label>

                <br></br>

                <p><b>LGBTQ Status: </b></p>

                <label >
                    <input type="radio" name="lgbtq"  onClick={() => { setLgbtq("true") }}/>

                    LGBTQ
                </label>
                <label >
                    <input type="radio" name="lgbtq" onClick={() => { setLgbtq("false") }} />

                    Not LGBTQ
                </label>
                <label >
                    <input type="radio" name="lgbtq" onClick={() => { setLgbtq("either") }} defaultChecked={true} />

                    Either
                </label>

                <br></br>

                <p><b>Disability Status: </b></p>

                <label >
                    <input type="radio" name="disability" onClick={() => { setDisabled("true") }} />

                    Disabled
                </label>

                <label >
                    <input type="radio" name="disability" onClick={() => { setDisabled("false") }} />

                    Not Disabled
                </label>

                <label >
                    <input type="radio" name="disability" onClick={() => { setDisabled("either") }} defaultChecked={true} />

                    Either
                </label>

                <br></br>

                <p><b>Upbringing: </b></p>

                <label >
                    <input type="radio" name="upbringing" onClick={() => { setUpbringing("Urban") }} />

                    Urban
                </label>

                <label >
                    <input type="radio" name="upbringing" onClick={() => { setUpbringing("Rural") }} />

                    Rural
                </label>

                <label >
                    <input type="radio" name="upbringing" onClick={() => { setUpbringing("either") }} defaultChecked={true} />

                    Either
                </label>

                <br></br>

                <button id="reset-button" onClick={() => { window.location.reload() }}>Reset Filters</button>

            </>
        )
    }

    function getHeaders() {

        const student: any = students[0];

        const headings: any[] = [];

        for (const field in student) {

            if (field === "id") {

                headings.push(field);
            }
            else if (typeof student[field] === 'number') {

                headings.push(field);
            }
        }

        headings.push("Contact");

        return headings;
    }

    function generateKey() {

        count++;
        return count;
    }

    function getTitle() {

        var title = "";

        if (filterState.studentBase === "all") {

            title = "All ";
        }
        else {

            title = "At Risk ";
        }


        switch (filterState.ethnicity) {

            case "White":
                title += "White ";
                break;

            case "Not_White":
                title += "Non-White ";
                break
          
        }

        switch (filterState.gender) {

            case "Male":
                title += "Male ";
                break;

            case "Female":
                title += "Female ";
                break

        }

        switch (filterState.lgbtq) {

            case "true":
                title += "LGBTQ ";
                break;

            case "false":
                title += "Non-LQBTQ ";
                break

        }

        switch (filterState.disabled) {

            case "true":
                title += "Disabled ";
                break;

            case "false":
                title += "Non-Disabled ";
                break

        }

        switch (filterState.upbringing) {

            case "Rural":
                title += "Rural ";
                break;

            case "Urban":
                title += "Urban ";
                break

        }

        title += "Students";

        return title;
    }



    return (

        <div id="content">

            <div id="graph-and-filters">

                <div id="title">
                    <p><b>{ getTitle() }</b></p>
                </div>

                <div id="parallel-graph">
                    { parallelGraph() }
                </div>

                <div id="filters">
                    <p className="filter-title"><b>Student Base Filter</b></p>

                    { studentBaseFilters() }
                    

                    <p className="filter-title"><b>DEI Filters</b></p>

                    { deiFilters() }
                </div>
            </div>

            <div id="table">
                <table>
                    <thead>
                        <tr>
                            {
                                getHeaders().map((header) => {

                                    return <th key={generateKey()}>{header}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {

                            filterStudents(students, filterState).map((student: any) => {

                                return (
                                    <tr className="students" key={generateKey()}>
                                        <td>{student.id}</td>
                                        <td>{student.hw1}</td>
                                        <td>{student.hw2}</td>
                                        <td>{student.quiz1}</td>
                                        <td>{student.exam1}</td>
                                        <td>
                                            <Link to={"contact/" + student.id}>
                                                <button id="contact-button">Contact Student</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>    
    )
}
