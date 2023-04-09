import React from 'react'
import { WrapperLableText, WrapperContent, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavBar = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue key={option}>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} key={option.value} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ dispaly: 'flex' }} key={option}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span> {`tu ${option}  sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice key={option}>{option}</WrapperTextPrice>
                    )
                })
            default:
                return {}
        }
    }
    return (
        <div>
            <WrapperLableText>NavBar</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Tu lanh', 'TV', 'MAYGIAT'])}
            </WrapperContent>
            {/* <WrapperContent>
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' },
                    { value: 'c', label: 'C' }
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [1, 2, 3, 4, 5])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['aishdias', 'asgduasgd'])}
            </WrapperContent> */}
        </div>
    )
}

export default NavBar