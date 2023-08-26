import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Icons
import ArrowDownIcon from 'icons/ArrowDownIcon';
import TopIcon from 'icons/TopIcon';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Brought', 555.3, 'Adam wick', '0×5dd...4f12', '10:10 PM 17 July 2023'),
  createData('Brought', 555.3, 'Adam wick', '0×5dd...4f12', '10:10 PM 17 July 2023'),
  createData('Brought', 555.3, 'Adam wick', '0×5dd...4f12', '10:10 PM 17 July 2023'),
  createData('Brought', 555.3, 'Adam wick', '0×5dd...4f12', '10:10 PM 17 July 2023'),
  createData('Brought', 555.3, 'Adam wick', '0×5dd...4f12', '10:10 PM 17 July 2023'),
];

const Ownership = (props) => {

  // States
  const [age, setAge] = useState('');

  // Select Value
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className="ownership-sec">
      <div className="container pd-0">

        {/* Main Heading */}
        <div className="main-heading">
          <h3 className="title">Metadata & Ownership Activities</h3>
        </div>
        {/* Main Heading End */}

        {/* Ownership Section Inner */}
        <div className="ownership-sec-inner">
            
          {/* Filters Wrapper */}
          <div className="filters-wrap">
            <span>Filter by:</span>
            <FormControl sx={{ maxHeight: 42, width: '165px' }}>
              <InputLabel id="demo-simple-select-label">Sales items type</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
                IconComponent={() => <ArrowDownIcon className="icon" />}
                sx={{ maxHeight: 42 }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* Filters Wrapper End */}

          {/* Table */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Event</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">From</TableCell>
                  <TableCell align="center">To</TableCell>
                  <TableCell align="center">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <div className="table-cell-wrap">
                        <Avatar sx={{ width: 34, height: 34, backgroundColor: '#fff' }}>
                          <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33398 11.3333C3.33398 8.81918 3.33398 7.5621 4.11503 6.78105C4.89608 6 6.15316 6 8.66732 6H11.334C13.8481 6 15.1052 6 15.8863 6.78105C16.6673 7.5621 16.6673 8.81918 16.6673 11.3333C16.6673 13.8475 16.6673 15.1046 15.8863 15.8856C15.1052 16.6667 13.8481 16.6667 11.334 16.6667H8.66732C6.15316 16.6667 4.89608 16.6667 4.11503 15.8856C3.33398 15.1046 3.33398 13.8475 3.33398 11.3333Z" stroke="#4B4949" stroke-width="1.07143"/>
                            <path d="M12.6663 5.9987C12.6663 4.74162 12.6663 4.11308 12.2758 3.72256C11.8853 3.33203 11.2568 3.33203 9.99967 3.33203C8.7426 3.33203 8.11406 3.33203 7.72353 3.72256C7.33301 4.11308 7.33301 4.74162 7.33301 5.9987" stroke="#4B4949" stroke-width="1.07143"/>
                            <path d="M10.0003 13.5569C10.7367 13.5569 11.3337 13.0594 11.3337 12.4457C11.3337 11.8321 10.7367 11.3346 10.0003 11.3346C9.26395 11.3346 8.66699 10.8372 8.66699 10.2235C8.66699 9.60987 9.26395 9.11241 10.0003 9.11241M10.0003 13.5569C9.26395 13.5569 8.66699 13.0594 8.66699 12.4457M10.0003 13.5569V14.0013M10.0003 8.66797V9.11241M10.0003 9.11241C10.7367 9.11241 11.3337 9.60987 11.3337 10.2235" stroke="#4B4949" stroke-width="1.07143" stroke-linecap="round"/>
                          </svg>
                        </Avatar>
                        <span>{row.name}</span>
                      </div>
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">
                      <div className="owner-view">
                        <Avatar sx={{ width: 34, height: 34 }} alt="" src="/assets/images/avatar-1.png" />
                        <span className="title">{row.fat}</span>
                        <TopIcon className="cursor-pointer" />
                      </div>
                    </TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Table End */}
          
        </div>
        {/* Ownership Section Inner End */}

      </div>
    </section>
  )
};

Ownership.propTypes = {};

export default Ownership;
