import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Rankings = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          backgroundColor: 'lightgrey',
          alignItems: 'center',
        }}
      >
        <Cell style={{ flex: 1 }}>
          <Text style={{ fontWeight: '900' }}>Ranking</Text>
        </Cell>
        <Cell style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700' }}>Jugador</Text>
        </Cell>
        <Cell style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700' }}>Provincia</Text>
        </Cell>
        <Cell style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700' }}>Puntos</Text>
        </Cell>
      </View>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'orange',
          flexGrow: 1,
        }}
      >
        {data.map((row, index) => {
          let color = 'white';
          if (index % 2 === 0) {
            color = 'orange';
          }
          return <TableRow data={row} key={index} color={color} />;
        })}
      </ScrollView>
    </>
  );
};

const TableRow = ({ data, color }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: color,
        alignItems: 'center',
        justifyItems: 'center',
        paddingVertical: 10,
      }}
    >
      <Cell style={{ flex: 1 }}>
        <Text style={{ fontWeight: '500' }}>#{data.ranking}</Text>
      </Cell>
      <Cell style={{ flex: 1 }}>
        <Text>{data.name}</Text>
      </Cell>
      <Cell style={{ flex: 1 }}>
        <Text>{data.provincia}</Text>
      </Cell>
      <Cell style={{ flex: 1 }}>
        <Text>{data.puntos}</Text>
      </Cell>
    </View>
  );
};

const Cell = styled.View`
  align-items: center;
`;

const data = [
  {
    name: 'juan perez',
    ranking: 1,
    provincia: 'BA',
    puntos: 1200,
    edad: 36,
    categorias: ['A', 'B'],
  },
  {
    name: 'jose lopez',
    ranking: 2,
    provincia: 'MI',
    puntos: 1100,
    edad: 38,
    categorias: ['A', 'B'],
  },
  {
    name: 'jorge gomez',
    ranking: 3,
    provincia: 'CB',
    puntos: 1000,
    edad: 39,
    categorias: ['A', 'B'],
  },
  {
    name: 'juan perez',
    ranking: 1,
    provincia: 'BA',
    puntos: 1200,
    edad: 36,
    categorias: ['A', 'B'],
  },
  {
    name: 'jose lopez',
    ranking: 2,
    provincia: 'MI',
    puntos: 1100,
    edad: 38,
    categorias: ['A', 'B'],
  },
  {
    name: 'jorge gomez',
    ranking: 3,
    provincia: 'CB',
    puntos: 1000,
    edad: 39,
    categorias: ['A', 'B'],
  },
  {
    name: 'juan perez',
    ranking: 1,
    provincia: 'BA',
    puntos: 1200,
    edad: 36,
    categorias: ['A', 'B'],
  },
  {
    name: 'jose lopez',
    ranking: 2,
    provincia: 'MI',
    puntos: 1100,
    edad: 38,
    categorias: ['A', 'B'],
  },
  {
    name: 'jorge gomez',
    ranking: 3,
    provincia: 'CB',
    puntos: 1000,
    edad: 39,
    categorias: ['A', 'B'],
  },
  {
    name: 'juan perez',
    ranking: 1,
    provincia: 'BA',
    puntos: 1200,
    edad: 36,
    categorias: ['A', 'B'],
  },
  {
    name: 'jose lopez',
    ranking: 2,
    provincia: 'MI',
    puntos: 1100,
    edad: 38,
    categorias: ['A', 'B'],
  },
  {
    name: 'jorge gomez',
    ranking: 3,
    provincia: 'CB',
    puntos: 1000,
    edad: 39,
    categorias: ['A', 'B'],
  },
  {
    name: 'juan perez',
    ranking: 1,
    provincia: 'BA',
    puntos: 1200,
    edad: 36,
    categorias: ['A', 'B'],
  },
  {
    name: 'jose lopez',
    ranking: 2,
    provincia: 'MI',
    puntos: 1100,
    edad: 38,
    categorias: ['A', 'B'],
  },
  {
    name: 'jorge gomez',
    ranking: 3,
    provincia: 'CB',
    puntos: 1000,
    edad: 39,
    categorias: ['A', 'B'],
  },
  {
    name: 'juan perez',
    ranking: 1,
    provincia: 'BA',
    puntos: 1200,
    edad: 36,
    categorias: ['A', 'B'],
  },
  {
    name: 'jose lopez',
    ranking: 2,
    provincia: 'MI',
    puntos: 1100,
    edad: 38,
    categorias: ['A', 'B'],
  },
  {
    name: 'jorge gomez',
    ranking: 3,
    provincia: 'CB',
    puntos: 1000,
    edad: 39,
    categorias: ['A', 'B'],
  },
];
