import { useState } from 'react'
import styles from './Select.module.scss'

function Select({
  placeholder = 'Выберите...',
  options,
  errorText,
  className,
  onClick = () => {},
  onChange = () => {},
  containerClassName,
  defaultValue = 'default',
  disabledNotEntered = false,
  notEnteredColor = 'var(--text-color)',
  ...params
}) {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const onChangeHandler = (e) => {
    const value = e.target.value
    onChange(value)
    setSelectedValue(value)
  }

  return (
    <div className={[styles.select, containerClassName].join(' ')}>
      <select
        {...params}
        onClick={onClick}
        onChange={onChangeHandler}
        className={[
          styles.select__select,
          className,
          errorText && styles.select__select_error,
        ].join(' ')}
        value={selectedValue}
      >
        <option
          value="default"
          className={styles.select__option}
          disable={disabledNotEntered.toString()}
          style={{ color: notEnteredColor }}
        >
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={styles.select__option}
          >
            {option.label}
          </option>
        ))}
      </select>
      {errorText && (
        <span className={['small-text', styles.select__errorText].join(' ')}>
          {errorText}
        </span>
      )}
    </div>
  )
}

export default Select
