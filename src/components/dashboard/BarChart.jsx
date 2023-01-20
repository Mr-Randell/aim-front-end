import React from 'react'
import { ResponsiveBar } from "@nivo/bar";
import { barData as data} from "../../data";
import { tokens } from "../../pages/Dashboard/thems";
import { useTheme } from "@mui/material"
import { Box } from "@mui/material";
import Header from "./Header";

function BarChart({ isDashboard = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {/* https://nivo.rocks/bar/ */}
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg border-2 border-teal-600 shadow-xl overflow-x-auto">
        <Header title="Bar Chart" description="Simple Bar Chart" />
        <Box height="75vh" overflow="hidden">
          <ResponsiveBar
          style={{overflow: "hidden"}}
            data={data}
            theme={{
              // added
              axis: {
                domain: {
                  line: {
                    stroke: colors.grey[900],
                  },
                },
                legend: {
                  text: {
                    fill: colors.grey[900],
                  },
                },
                ticks: {
                  line: {
                    stroke: colors.grey[900],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: colors.grey[900],
                  },
                },
              },
              legends: {
                text: {
                  fill: colors.grey[900],
                },
              },
            }}
            keys={["Laptop", "Phone", "Cars", "MacBook", "Houses", "HeadPhone"]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            borderColor={{
              from: "color",
              modifiers: [["darker", "1.6"]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: isDashboard ? undefined : "country", // changed
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: isDashboard ? undefined : "assets", // changed
              legendPosition: "middle",
              legendOffset: -40,
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            role="application"
            barAriaLabel={function (e) {
              return (
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
              );
            }}
          />
        </Box>
      </div>
    </>
  );
}

export default BarChart