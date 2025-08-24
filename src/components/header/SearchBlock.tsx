import {InputBlock} from "@/components/header/InputBlock";
import {ButtonSearch} from "@/components/header/ButtonSearch";

export const SearchBlock = () => {
  return (
    <div className="flex flex-row gap-4 flex-grow">
      <ButtonSearch />
      <InputBlock />
    </div>
  );
};

