import React from "react"
import Layout from "../components/layout"
import logo from "../../static/survey.jpg"
import CourseCard from "../components/courseCard"
import soil from "../../static/soil.jpg"
import water from "../../static/water.jpeg"
import tomato from "../../static/tomato.png"
import def from "../../static/nutrition/leaf.jpg"
import { css } from "@emotion/core"
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => 

    <Layout>
        <div>
            <h1 css={css`
            text-align: center;
            `}>Agriculture in India </h1>
        </div>

            
            <div css={css`
            margin: auto;
            `}>
            <CourseCard 
              title = "Nutrition and Deficiencies"
              text = "Food for plants!"
              img = {def}
              link = "/nutrition"
            />
            </div>
            <br></br>
             <CourseCard 
              title = "Soil"
              text="From whence all life springs from!"
              img = {soil}
              link = "/soil"
            />
            <br></br>
             <CourseCard 
              title = "Diseases"
              text="How to Diagnose and Treat"
              img = {tomato}
              link = "/diseases"
            />
           
    </Layout>