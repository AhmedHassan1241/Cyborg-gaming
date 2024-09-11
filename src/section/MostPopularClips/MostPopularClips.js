import { Clips, SectionHeader, ViewButton } from '../../Components';
import mostPCData from '../../Data/PopularClipsData';
import './MostPopular.css'

const MostPopularClips = () => {
// const clipsdata = props.data;
const clips = mostPCData.map(clip=>{
        return <Clips key={clip.id} clip={clip}/>
    })
  return (
    <div style={{position:"relative"}}>
    <SectionHeader>
    <span>Your Most Popular</span> Clips
    <div className='clips-container'>
        {clips}
    </div>
</SectionHeader>
        <ViewButton>
            Load More Clips
        </ViewButton>
    </div>
  )
}

export default MostPopularClips;
