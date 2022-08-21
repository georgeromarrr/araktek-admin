import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import swal from "sweetalert";
import {Link} from 'react-router-dom'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AddCat() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



//   API CALL
const [categoryInput, setCategory] = useState({
    slug: '',
    name: '',
    description: '',
    status: '',
    meta_title: '',
    meta_keyword: '',
    meta_description: '',
    error_list: [],
})


const handleInput= (e) => {
    e.persist();
    setCategory({...categoryInput, [e.target.name]: e.target.value })
}

const submitCategory = (e) => {
    e.preventDefault();

    const data = {
        slug: categoryInput.slug,
        name: categoryInput.name,
        description: categoryInput.description,
        status: categoryInput.status,
        meta_title: categoryInput.meta_title,
        meta_keyword: categoryInput.meta_keyword,
        meta_description: categoryInput.meta_description,

    }

    axios.post(`/api/store-category`, data).then(res => {
        if (res.data.status === 200) {
            swal("Success",res.data.message, "success");
            document.getElementById(`CATEGORY_FORM`).reset();
        }
        else if (res.data.status === 400) {
            setCategory({...categoryInput, error_list:res.data.errors});
        }
    })
}

  return (
    <Box sx={{ width: '100%' }}>
      <div className="my-2 flex justify-between">
        <p className="text-3xl font-bold uppercase mb-10 dark:text-white">
          Add New Category
        </p>
        <Link to='/viewcategory'> 
        <button
          type="button"
          className="border border-black text-black py-2 px-6 rounded-md hover:bg-green-400 hover:border-black"
        >
          View Category List
        </button>
          </Link>
      </div>
       
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="SEO Tags" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <form onSubmit={submitCategory} id="CATEGORY_FORM">
      <TabPanel value={value} index={0}>
        <div className="py-3 flex justify-start flex-col gap-1 w-7/12">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-start"
            >
              Slug
            </label>
            <input
              onChange={handleInput}
              value={categoryInput.slug}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="slug"
              type="text"
              required
            />
        </div>

        <div className="py-3 flex justify-start flex-col gap-1 w-7/12">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-start"
            >
              Name
            </label>
            <input
              onChange={handleInput}
              value={categoryInput.name}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="name"
              type="text"
              required
            />
        </div>

        <div className="py-3 flex justify-start flex-col gap-1 w-7/12">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-start"
            >
              Description
            </label>
            <input
              onChange={handleInput}
              value={categoryInput.description}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="description"
              type="text"
              required
            />
        </div>

         
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="py-3 flex justify-start flex-col gap-1 w-7/12">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-start"
            >
              Meta Title
            </label>
            <input
              onChange={handleInput}
              value={categoryInput.meta_title}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="meta_title"
              type="text"
              required
            />
        </div>

        <div className="py-3 flex justify-start flex-col gap-1 w-7/12">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-start"
            >
              Meta Keyword
            </label>
            <input
              onChange={handleInput}
              value={categoryInput.meta_keyword}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="meta_keyword"
              type="text"
              required
            />
        </div>

        <div className="py-3 flex justify-start flex-col gap-1 w-7/12">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-start"
            >
              Meta Description
            </label>
            <input
              onChange={handleInput}
              value={categoryInput.meta_description}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="meta_description"
              type="text"
              required
            />
        </div>
        <div className="hidden">
          <label>Status</label>
          <input type="checkbox" name='status' onChange={handleInput} value={categoryInput.status} /> Status 0= shown/1=hidden
        </div>
      </TabPanel>
      <div className="py-3 items-center flex justify-end gap-4 w-7/12">
            <button
              type="submit"
              className="border w-4/12 bg-gray-100 text-black border-black py-2 px-12 rounded-md hover:bg-green-400 hover:border-black"
            >
              ADD
            </button>
          </div>
      </form>
    </Box>
  );
}
