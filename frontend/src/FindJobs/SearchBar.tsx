import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData"
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([60, 800]);
    return <div className="flex px-5 py-8">
        {
            dropdownData.map((item, index) => <> <div key={index} className="w-1/5">
                <MultiInput {...item}/>
            </div>
            <Divider mr="xs" size="xs" orientation="vertical" />
            </>)
        }
        <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
            <div className="flex text-sm justify-between">
                <div>Заработная плата</div>
                <div>&#8381;{value[0]} тыс. руб. - &#8381;{value[1]} тыс. руб.</div>
            </div>
        <RangeSlider color="bright-sun.4" size="xs" value={value} min={60} max={800} labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}  onChange={setValue} />
        </div>
    </div>
}

export default SearchBar;
