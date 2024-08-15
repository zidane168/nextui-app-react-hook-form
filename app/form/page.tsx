'use client' 

import { Autocomplete, AutocompleteItem, Button, Checkbox, CheckboxGroup, DateInput, DatePicker, DateRangePicker, Input, Select, SelectItem, Spacer } from "@nextui-org/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {CalendarDate, parseDate} from "@internationalized/date";

interface IDate {
    year: number,
    month: number, 
    day: number
}

interface IRangeDate {
    start: IDate,
    end: IDate,  
}

interface IResult {
    email: string,
    country: string, 
    animals: number[],
    favourColors: number[],
    birthDate: IDate,
    rangeDate: IRangeDate
}


export default function FormPage() {

    const { control, register, setValue, handleSubmit, formState: { errors }}  = useForm();
    const [ result, setResult ] = useState<IResult>();

    const animals = [
        { label: 'Cat', value: '1' },
        { label: 'Dog', value: '2'},
        { label: 'Elephant', value: '3' },
        { label: 'Tiger', value: '4' },
        { label: 'Lion', value: '5' },
        { label: 'Dolphin', value: '6' }
    ]

    const [ email, setEmail ] = useState<string>('abc@gmail.com')

    const onSubmit = (data: any) => { 
        console.log(data)
        setResult(data)
    }

    function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(email)
    }

    // const handleAnimalsChange = (selectedItem: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue('animals', selectedItem.target.value)
    // }

    return (
        <>
            <div className="flex flex-col max-w-lg mx-auto text-center"> 
                <form  onSubmit={ handleSubmit(onSubmit) }>
                    <div className="flex justify-between gap-4">
                    <Input 
                        isRequired
                        type="email"
                        label="Email" 
                        value={ email }
                        onChange={ (e) => onEmailChange(e) }
                        className="max-w-xs" 
                        { ...register("email", { required: "This fields is required" }) }
                    />
                    <div className="text-left">
                        { errors.email && <span className="text-red-600"> { errors.email.message } </span>}
                    </div>

                <Input 
                        isRequired
                        type="name"
                        label="Name" 
                        className="max-w-xs" 
                        { ...register("name", { required: "This fields is required" }) }
                        />

                    </div>

                    <div className="text-left">
                        { errors.email && <span className="text-red-600"> { errors.name.message } </span>}
                    </div>

                    <Spacer y={4} />

                    <Select 
                        label="Country"
                        placeholder="Select an option" 
                        className='flex justify-start max-w-xs'
                        { ...register("country", { required: "This field is required" } )}    
                    >
                        <SelectItem value="canada" key={"canada"}>Canada</SelectItem>
                        <SelectItem value="american" key={"american"}>American</SelectItem>
                    </Select>

                    <div className="text-left">
                    { errors.country && <span className="text-red-600"> { errors.country.message } </span>}
                    </div>
                    
                    <Spacer y={4} /> 
                
                    <CheckboxGroup 
                        label="Favour Color"
                        className="text-left"
                        defaultValue={["Red, Pink"]}  
                        >
                        <Checkbox { ...register("favourColors")} value="1"> Red </Checkbox>
                        <Checkbox { ...register("favourColors")} value="2"> Yellow </Checkbox>
                        <Checkbox { ...register("favourColors")} value="3"> Blue </Checkbox>
                        <Checkbox { ...register("favourColors")} value="4"> Green </Checkbox>
                        <Checkbox { ...register("favourColors")} value="5"> Pink </Checkbox>
                    </CheckboxGroup> 

                    <div className="flex flex-wrap w-full gap-4 mt-4 md:flex-nowrap"> 
                                
                        <div>
                            <Controller
                                name="birthDate"
                                rules={{ required: "Birth date is required" }}  // add rules here
                                control={control}
                                render={ ({ field }) =>(
                                    <DatePicker 
                                        label="Birth date"
                                        className="max-w-xs text-left"
                                        isRequired
                                        { ...field } 
                                    /> 
                                )}
                                >
                            </Controller> 
                            <div className="text-left">
                                { errors.birthDate && <span className="text-red-600"> { errors.birthDate.message } </span>}
                            </div>
                        </div>

                        <div>
                            <Controller
                                name="rangeDate"
                                rules={{ required: 'Range Date is required' }}
                                control={ control }
                                render={ ({ field }) => (
                                    <DateRangePicker 
                                        label="Stay duration" 
                                        isRequired
                                        { ...field } 
                                        defaultValue={{
                                            start: parseDate("2024-04-01"),
                                            end: parseDate("2024-04-08"),
                                        }}
                                        className="max-w-xs"
                                    />
                                )}
                            >
                            
                            </Controller>
                            <div className="text-left">
                                { errors.birthDate && <span className="text-red-600"> { errors.rangeDate.message } </span>}
                            </div>
                        </div>
                    </div> 

                    <div className="max-w-xs mt-4"> 

                        <Controller
                            name="animals"
                            control={control}
                            rules={{ required: "This field is required" }}
                            render={({ field }) => (
                                <Autocomplete
                                    isRequired
                                    label="Animals"
                                    defaultItems={animals}
                                    placeholder="Search an animal"
                                    defaultSelectedKey="1"
                                    className="max-w-xs"
                                    onChange={(selectedItem) => field.onChange(selectedItem.value)}
                                >
                                    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                                </Autocomplete>
                            )}
                        />

                        {/*   <Autocomplete
                             isRequired 
                              label="Animals"
                              defaultItems={animals}
                              placeholder="Search an animal"
                              defaultSelectedKey="1"
                              className="max-w-xs" 
                              { ...register("animals", { required: "This field is required" } )}    
                          >
                              {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>} 
                          </Autocomplete>     */}
                        

                        <div className="text-left">
                            { errors.animals && <span className="text-red-600"> { errors.animals.message } </span>}
                        </div>
 
                    </div>
            
                    <button className="p-2 mt-4 transition border border-white rounded-md hover:scale-110 hover:bg-blue-500" color="primary" type="submit"> Submit </button>  
    
                </form> 
                
            </div>
 
            <div className="w-full">
                <hr className="mt-4 mb-4 " />
                <div className="mt-4 text-left"> Result here:  </div>
                <div className="flex justify-between gap-8 mb-4">
                    <div>{ result?.email  }  </div>
                    <div> { result?.country  }  </div>
                    <div> { result?.favourColors  }</div>
                    <div> animals = { result?.animals  }</div>
                    <div> { result?.birthDate.year  } | { result?.birthDate.month  } | { result?.birthDate.day  }</div>
                    <div> { result?.rangeDate.start.year   } | { result?.rangeDate.start.month  } | { result?.rangeDate.start.day  }</div>
                    <div> { result?.rangeDate.end.year   } | { result?.rangeDate.end.month  } | { result?.rangeDate.end.day  }</div>
                </div>

            </div>
        </>
    )
}