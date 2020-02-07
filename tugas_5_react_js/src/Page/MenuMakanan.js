import React, { Component } from 'react';
import DaftarMakanan from '../Lib/DaftarMakanan'

const listMakanan = [
  {
    namaMakanan: "Nasi Padang",
    harga: "20.000"
  },
  {
    namaMakanan: "Sate",
    harga: "20.000"
  },
  {
    namaMakanan: "Soto Lamongan",
    harga: "10.000"
  },
  {
    namaMakanan: "Nasi Uduk",
    harga: "10.000"
  },
  {
    namaMakanan: "Nasi Kuning",
    harga: "15.000"
  },
  {
    namaMakanan: "Ayam Geprek",
    harga: "15.000"
  },
  {
    namaMakanan: "Pecel Lele",
    harga: "15.000"
  },
  {
    namaMakanan: "Pecel",
    harga: "10.000"
  },
  {
    namaMakanan: "Mie Ayam",
    harga: "10.000"
  }
];
class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <h3>Daftar Menu Favorite</h3>
        <table>
          <tbody>
            <tr>
              {
                DaftarMakanan.map((data,index) => {
                  return (
                    <td key={index}>
                      <img src={data.img} width="150" height="100" alt="Product Makanan"/>
                      <center>
                        <p>{data.namaMakanan}</p>
                        <p>Harga: {data.harga}</p>
                      </center>
                    </td>
                  );
                })
              }
            </tr>
          </tbody>
        </table>
        <h4>List Makanan:</h4>
        {
          listMakanan.map((data,index) => {
            return (
              <div key={index}>
                <p>{data.namaMakanan} | {data.harga}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}
export default MenuMakanan;
