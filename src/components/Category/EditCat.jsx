import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import swal from "sweetalert";
import {Link, useNavigate, useParams} from 'react-router-dom'

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

export default function EditCat() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



//   API CALL
const navigate = useNavigate();
const [loading, setLoading] = useState(true);
const [categoryInput, setCategory] = useState([]);
const [error, setError] = useState([]);
const {id} = useParams();

useEffect(() => {

    axios.get(`/api/edit-category/${id}`).then(res => {
        // console.log({id})
        if (res.data.status === 200) {
           
            setCategory(res.data.category);
        }
        else if (res.data.status === 404) {
            swal("Error", res.data.message, "error");
            navigate('/admin/view-category');
        }
        setLoading(false);
    })
},[id, navigate])

const handleInput = (e) => {
    e.persist();
    setCategory({...categoryInput, [e.target.name]: e.target.value})
}

const updateCategory = (e) => {
    e.preventDefault();

    const data = categoryInput;
    axios.put(`/api/update-category/${id}`, data).then(res => {
        if (res.data.status === 200) {

            swal("Success", res.data.message, "success");
            navigate('/admin/view-category');
            setError([]);
        }
        else if(res.data.status === 422) {

            swal("All fields must be fill in", "", "error");
            setError(res.data.errors);
        }
        else if(res.data.status === 404) {
            swal("Error", res.data.message, "error");
            navigate('/admin/view-category');
        }
    })
}

if (loading) {
    return <h4>Loading Category...</h4>
}

  return (
    <Box sx={{ width: '100%' }}>
    <p className="text-3xl font-bold uppercase mb-10 dark:text-white">
          Add New Category
        </p>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="SEO Tags" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <form onSubmit={updateCategory} id="CATEGORY_FORM">
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
              UPDATE
            </button>
          </div>
      </form>
    </Box>
  );
}
