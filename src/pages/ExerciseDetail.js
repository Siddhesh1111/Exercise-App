import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos';

import {exerciseOptions, fetchData, youtubeoptions}  from '../utils/fetchData'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([])

  const {id} = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      console.log("ID is",id);
      const exercisedbUrl =  `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;

      const exerciseDetailData = await fetchData(`${exercisedbUrl}/exercises/exercise/${id}`, exerciseOptions);
      console.log(exerciseDetailData)
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeoptions);
      console.log("Video data",exerciseVideosData);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExerciseData = await fetchData(`${exercisedbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      console.log(targetMuscleExerciseData,"MUSCLES")
      setTargetMuscleExercise(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData(`${exercisedbUrl}/exercises/target/${exerciseDetailData.equipment}`, exerciseOptions);
      console.log(equipmentExerciseData,"EQUIPMENT")
      setEquipmentExercise(equipmentExerciseData);

    }

    fetchExerciseData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail}/>
      <ExerciseVideos exerciseVideos = {exerciseVideos} name = {exerciseDetail.name}/>
    </Box>
  )
}

export default ExerciseDetail
