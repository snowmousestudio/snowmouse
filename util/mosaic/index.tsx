"use client";

import * as React from "react";

export function useMediaValues(
  medias: number[] | undefined,
  columns: number[],
  gap: number[]
) {
  const [values, setValues] = React.useState({ columns: 1, gap: 1 });

  React.useEffect(() => {
    if (!medias) {
      setValues({ columns: columns[0], gap: gap[0] });
      return;
    }

    const mediaQueries = medias.map((media) =>
      window.matchMedia(`(min-width: ${media}px)`)
    );

    const onSizeChange = () => {
      let matches = 0;

      mediaQueries.forEach((mediaQuery) => {
        if (mediaQuery.matches) {
          matches++;
        }
      });

      // Update Values
      const idx = Math.min(mediaQueries.length - 1, Math.max(0, matches));
      setValues({ columns: columns[idx], gap: gap[idx] });
    };

    // Initial Call
    onSizeChange();

    // Apply Listeners
    for (const mediaQuery of mediaQueries) {
      mediaQuery.addEventListener("change", onSizeChange);
    }

    return () => {
      for (const mediaQuery of mediaQueries) {
        mediaQuery.removeEventListener("change", onSizeChange);
      }
    };
  }, [columns, gap, medias, values.columns, values.gap]);

  return values;
}

export type MosaicProps<T> = React.ComponentPropsWithoutRef<"div"> & {
  items: T[];
  render: (item: T, idx: number) => React.ReactNode;
  config: {
    columns: number | number[];
    gap: number | number[];
    media?: number[];
  };
};

export function createSafeArray(data: number | number[]) {
  return Array.isArray(data) ? data : [data];
}

export function Mosaic<T>({
  items = [],
  render,
  config,
  ...rest
}: MosaicProps<T>) {
  const { columns, gap } = useMediaValues(
    config.media,
    createSafeArray(config.columns),
    createSafeArray(config.gap)
  );

  const chunks = createChunks<T>(items, columns);
  const dataColumns = createDataColumns<T>(chunks, columns);

  return (
    <div
      {...rest}
      style={{
        display: "grid",
        alignItems: "start",
        gridColumnGap: gap,
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {dataColumns.map((column, idx) => (
        <MosaicRow gap={gap} key={idx}>
          {column.map((item, idx) => render(item, idx))}
        </MosaicRow>
      ))}
    </div>
  );
}

export function MosaicRow({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        rowGap: gap,
        gridTemplateColumns: "minmax(0, 1fr)",
      }}
    >
      {children}
    </div>
  );
}

export function createChunks<T>(data: T[] = [], columns = 3) {
  const result = [];

  for (let idx = 0; idx < data.length; idx += columns) {
    const slice = data.slice(idx, idx + columns);
    result.push(slice);
  }

  return result;
}

export function createDataColumns<T>(data: T[][] = [], columns = 3) {
  const result = Array.from<T[], T[]>({ length: columns }, () => []);

  for (let idx = 0; idx < columns; idx++) {
    for (let jdx = 0; jdx < data.length; jdx += 1) {
      if (data[jdx][idx]) {
        result[idx].push(data[jdx][idx]);
      }
    }
  }

  return result;
}
