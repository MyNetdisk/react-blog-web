/** @format */

import React from 'react'
import {PageHeader} from 'antd'
import {ThunderboltFilled} from '@ant-design/icons'
import '../public/style/components/weather.css'

const Weather = () => {
  return (
    <div className="weather comm-box">
      <PageHeader
        className="weather-page-header"
        backIcon={<ThunderboltFilled />}
        onBack={() => null}
        title="天气"
        subTitle=""
      />
    </div>
  )
}
export default Weather
