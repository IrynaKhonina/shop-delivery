import {InputBlock} from "@/conponents/header/InputBlock";
import {ButtonSearch} from "@/conponents/header/ButtonSearch";


    export const SearchBlock = () => {
        return (
            <div className="flex flex-row gap-4 flex-grow">
                <ButtonSearch />
                <InputBlock />
            </div>
        );
    };

