import React from "react";
import { Stage, Layer, Line, Text, Image as KonvaImage, Rect } from "react-konva";
import useImage from "use-image";

const DesignFrame = ({ src, widthInches = 48, heightInches = 60, scale = 10 }) => {
  const [image] = useImage(src);

  const rulerSize = 30; // space for rulers
  const stageWidth = widthInches * scale + rulerSize;
  const stageHeight = heightInches * scale + rulerSize;

  // Generate ruler ticks
  const renderRuler = () => {
    const ticks = [];

    // Horizontal ruler (top)
    for (let i = 0; i <= widthInches; i++) {
      ticks.push(
        <Line
          key={`h-${i}`}
          points={[
            rulerSize + i * scale,
            rulerSize - (i % 12 === 0 ? 10 : 5),
            rulerSize + i * scale,
            rulerSize,
          ]}
          stroke="black"
          strokeWidth={i % 12 === 0 ? 1.5 : 0.7}
        />
      );
      if (i % 12 === 0) {
        ticks.push(
          <Text
            key={`ht-${i}`}
            x={rulerSize + i * scale - 8}
            y={5}
            text={`${i / 12}ft`}
            fontSize={10}
            fill="black"
          />
        );
      }
    }

    // Vertical ruler (left)
    for (let i = 0; i <= heightInches; i++) {
      ticks.push(
        <Line
          key={`v-${i}`}
          points={[
            rulerSize - (i % 12 === 0 ? 10 : 5),
            rulerSize + i * scale,
            rulerSize,
            rulerSize + i * scale,
          ]}
          stroke="black"
          strokeWidth={i % 12 === 0 ? 1.5 : 0.7}
        />
      );
      if (i % 12 === 0) {
        ticks.push(
          <Text
            key={`vt-${i}`}
            x={2}
            y={rulerSize + i * scale - 6}
            text={`${i / 12}ft`}
            fontSize={10}
            fill="black"
          />
        );
      }
    }

    return ticks;
  };

  return (
    <Stage width={stageWidth + 20} height={stageHeight + 20} style={{ border: "1px solid #ccc" }}>
      <Layer>
        {/* Background frame */}
        <Rect
          x={rulerSize}
          y={rulerSize}
          width={widthInches * scale}
          height={heightInches * scale}
          fill="#fdfdfd"
          stroke="#bbb"
        />

        {/* Rulers */}
        {renderRuler()}

        {/* Design Image inside frame */}
        {image && (
          <KonvaImage
            image={image}
            x={rulerSize}
            y={rulerSize}
            width={widthInches * scale}
            height={heightInches * scale}
          />
        )}
      </Layer>
    </Stage>
  );
};

export default DesignFrame;
