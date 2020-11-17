/** @format */

import React from 'react'
import Head from 'next/head'
import {PageHeader} from 'antd'
import {ThunderboltFilled} from '@ant-design/icons'
import '../public/style/components/weather.css'

const Weather = () => {
  return (
    <div className="weather comm-box">
      <Head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
                WIDGET = {
                CONFIG: {
                  layout: 2,
                  width: '230',
                  height: '270',
                  background: 1,
                  dataColor: 'FFFFFF',
                  borderRadius: 5,
                  key: 'UHmzJce1XI',
                },
              }
            `,
          }}
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src="https://apip.weatherdt.com/standard/static/js/weather-standard-common.js?v=2.0" />
      </Head>
      <PageHeader
        className="weather-page-header"
        backIcon={<ThunderboltFilled />}
        onBack={() => null}
        title="天气"
        subTitle=""
      />
      <div id="weather-v2-plugin-standard" />
    </div>
  )
}
export default Weather
