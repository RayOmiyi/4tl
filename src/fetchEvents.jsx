import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "w2rel4w4gorm",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({content_type: "events",});
      const events = response.items.map((item)=>{
        const {title,url,image,date} = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return {title,url,img,id,date}
      })
    //   events from the tryBlock not usestateBlock
      setEvents(events)
      setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
  };

  useEffect(() => {
    getData()
  }, []);
//   we are passing the events from the usestate block not the tryBlock
// loading from the usestate block
  return {loading,events}
};
