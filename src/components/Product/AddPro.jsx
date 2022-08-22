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

export default function AddPro() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



//   API CALL
const [categorylist, setCategorylist] = useState([]);
const [brandlist, setBrandlist] = useState([])
const [productInput, setProduct] = useState({
    category_id: '',
    slug: '',
    name: '',
    description: '',

    meta_title: '',
    meta_keyword: '',
    meta_description: '',

    selling_price: '',
    original_price: '',
    qty: '',
    brand: '',
    featured: '',
    popular: '',
    status: '',

});

const [picture, setPicture] = useState([]);
const [errorlist, setError] = useState([]);

const handleInput = (e) => {
    e.persist();
    setProduct({...productInput, [e.target.name]: e.target.value});
}

const handleImage = (e) => {
    e.persist();
    setPicture({image: e.target.files[0]});
}



useEffect(() => {
    axios.get(`api/all-category`).then(res => {
        if (res.data.status === 200) {
            setCategorylist(res.data.category)
        }
    })
}, [])

useEffect(() => {
    axios.get(`api/view-brand`).then(res => {
        if (res.data.status === 200) {
            setBrandlist(res.data.brand)
        }
    })
}, [])

const submitProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', picture.image)
    formData.append('category_id', productInput.category_id)
    formData.append('brand_id', productInput.brand_id)
    formData.append('slug', productInput.slug)
    formData.append('name', productInput.name)
    formData.append('description', productInput.description)

    formData.append('meta_title', productInput.meta_title)
    formData.append('meta_keyword', productInput.meta_keyword)
    formData.append('meta_description', productInput.meta_description)

    formData.append('selling_price', productInput.selling_price)
    formData.append('original_price', productInput.original_price)
    formData.append('qty', productInput.qty)
    formData.append('brand', productInput.brand)
    formData.append('featured', productInput.featured)
    formData.append('popular', productInput.popular)
    formData.append('status', productInput.status)

    axios.post(`/api/store-product`, formData).then(res => {
        if (res.data.status === 200) {
            swal("Success", res.data.message, "success")
            setProduct({...productInput,
                category_id: '',
                slug: '',
                name: '',
                description: '',
        
                meta_title: '',
                meta_keyword: '',
                meta_description: '',
        
                selling_price: '',
                original_price: '',
                qty: '',
                brand: '',
                featured: '',
                popular: '',
                status: '',
        
            });
            setError([])
        }
        else if (res.data.status === 422) {
            swal("All Fields Must Be Filled","","error")
            setError(res.data.errors)
        }
    })
}


  return (
    <Box sx={{ width: '100%' }}>
      <div className="my-2 flex justify-between">
        <p className="text-3xl font-bold uppercase mb-10 dark:text-white">
          Add Product
        </p>
        <Link to='/viewproducts'> 
        <button
          type="button"
          className="border border-black text-black py-2 px-6 rounded-md hover:bg-green-400 hover:border-black"
        >
          View Product List
        </button>
          </Link>
      </div>
       
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="SEO Tags" {...a11yProps(1)} />
          <Tab label="Others" {...a11yProps(2)}/>
        </Tabs>
      </Box>
      <form onSubmit={submitProduct} encType='multipart/form-data'>
      <TabPanel value={value} index={0}>
      <div className="py-3 flex justify-start flex-col gap-1 w-7/12">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-start"
            >
              Select Category
            </label>
            <select
              onChange={handleInput}
              value={productInput.category_id}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="category_id"
              type="text"
              required
            >
               {
                categorylist.map((item)=> {
                  return(
                    <option value={item.id} key={item.id}>{item.name}</option>
                  )
                  })
                  }
            </select>
        </div>

      <div className="py-3 flex justify-start flex-col gap-1 w-7/12">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-start"
            >
              Slug
            </label>
            <input
              onChange={handleInput}
              value={productInput.slug}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="slug"
              type="text"
              required
            />
        </div>

        <div className="py-3 flex justify-start flex-col gap-1 w-7/12">
            <label
              for="name"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-start"
            >
              Product Name
            </label>
            <input
              onChange={handleInput}
              value={productInput.name}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="name"
              type="text"
              required
            />
        </div>

        <div className="py-3 flex justify-start flex-col gap-1 w-7/12">
            <label
              for="description"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-start"
            >
              Description
            </label>
            <input
              onChange={handleInput}
              value={productInput.description}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow h-12"
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
              value={productInput.meta_title}
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
              value={productInput.meta_keyword}
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
              value={productInput.meta_description}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow h-12"
              name="meta_description"
              type="text"
              required
            />
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <div className='flex justify-start gap-20'>
        <div>
        <div className="py-3 flex justify-start flex-col gap-1 w-96">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-7/12 text-start"
            >
              Selling Price
            </label>
            <input
              onChange={handleInput}
              value={productInput.selling_price}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="selling_price"
              type="text"
              required
            />
        </div>
        <div className="py-3 flex justify-start flex-col gap-1 w-96">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-12/12 text-start"
            >
              Original Price
            </label>
            <input
              onChange={handleInput}
              value={productInput.original_price}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="original_price"
              type="text"
              required
            />
        </div>
        <div className="py-3 flex justify-start flex-col gap-1 w-96">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-12/12 text-start"
            >
              Quantity
            </label>
            <input
              onChange={handleInput}
              value={productInput.qty}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="qty"
              type="text"
              required
            />
          </div>   
          </div>
        <div>
          <div className="py-3 flex justify-start flex-col gap-1 w-96">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-12/12 text-start"
            >
              Brand
            </label>
            <input
              onChange={handleInput}
              value={productInput.brand}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="brand"
              type="text"
              required
            />
        </div>   
        <div className="py-3 flex justify-start flex-col gap-1 w-96">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-12/12 text-start"
            >
              Image
            </label>
            <input
              onChange={handleImage}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="image"
              type="file"
              required
            />
          <div className="checkbox hidden">
            <div className="popular">
              <label>Popular</label>
              <input type="checkbox" name="popular" id="" onChange={handleInput} value={productInput.popular} />
            </div>
            <div className="status">
              <label>Popular</label>
              <input type="checkbox" name="popular" id="" onChange={handleInput} value={productInput.status} />
            </div>
            <div className="featured">
              <label>Popular</label>
              <input type="checkbox" name="popular" id="" onChange={handleInput} value={productInput.featured} />
            </div>
            
          </div>
        </div>   
        </div>
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
