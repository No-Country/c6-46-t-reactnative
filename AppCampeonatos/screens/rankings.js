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
          backgroundColor: 'darkorange',
          alignItems: 'center',
        }}
      >
        <Cell style={{ flex: 1.2 }}>
          <Text style={{ fontWeight: '500', fontSize: 18, color: 'white' }}>
            Ranking
          </Text>
        </Cell>
        <Cell style={{ flex: 1.9 }}>
          <Text style={{ fontWeight: '500', fontSize: 18, color: 'white' }}>
            Jugador
          </Text>
        </Cell>
        <Cell style={{ flex: 1.1 }}>
          <Text style={{ fontWeight: '500', fontSize: 18, color: 'white' }}>
            Provincia
          </Text>
        </Cell>
        <Cell style={{ flex: 1.1 }}>
          <Text style={{ fontWeight: '500', fontSize: 18, color: 'white' }}>
            Pts
          </Text>
        </Cell>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        {data.map((row, index) => {
          let color = 'white';
          let tColor = 'black';
          if (index % 2 === 0) {
            color = 'white' || 'rgb(100, 180, 100)';
            tColor = 'black';
          } else {
            color = 'rgb(100, 180, 100)' || 'orange';
            tColor = 'white';
          }
          return (
            <TableRow data={row} key={index} bkColor={color} color={tColor} />
          );
        })}
      </ScrollView>
    </>
  );
};

const TableRow = ({ data, bkColor, color }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: bkColor,
        alignItems: 'center',
        justifyItems: 'center',
        paddingVertical: 10,
      }}
    >
      <Cell style={{ flex: 1.1 }}>
        <Text
          style={{ fontWeight: '500', fontSize: 16, color: color || 'black' }}
        >
          #{data.ranking}
        </Text>
      </Cell>
      <Cell style={{ flex: 2 }}>
        <Text
          style={{ fontWeight: '500', fontSize: 14, color: color || 'black' }}
        >
          {data.name.toUpperCase()}
        </Text>
      </Cell>
      <Cell style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, color: color || 'black' }}>
          {data.provincia}
        </Text>
      </Cell>
      <Cell style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, color: color || 'black' }}>
          {data.puntos}
        </Text>
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
    name: 'juan jose perez carreras lopez',
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
