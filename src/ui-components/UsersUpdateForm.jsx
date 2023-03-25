/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
}) {
  const labelElement = <Text>{label}</Text>;
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UsersUpdateForm(props) {
  const {
    id: idProp,
    users,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    name: "",
    university: "",
    skills: [],
    interests: [],
    image: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [name, setName] = React.useState(initialValues.name);
  const [university, setUniversity] = React.useState(initialValues.university);
  const [skills, setSkills] = React.useState(initialValues.skills);
  const [interests, setInterests] = React.useState(initialValues.interests);
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usersRecord
      ? { ...initialValues, ...usersRecord }
      : initialValues;
    setUsername(cleanValues.username);
    setName(cleanValues.name);
    setUniversity(cleanValues.university);
    setSkills(cleanValues.skills ?? []);
    setCurrentSkillsValue("");
    setInterests(cleanValues.interests ?? []);
    setCurrentInterestsValue("");
    setImage(cleanValues.image);
    setErrors({});
  };
  const [usersRecord, setUsersRecord] = React.useState(users);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Users, idProp) : users;
      setUsersRecord(record);
    };
    queryData();
  }, [idProp, users]);
  React.useEffect(resetStateValues, [usersRecord]);
  const [currentSkillsValue, setCurrentSkillsValue] = React.useState("");
  const skillsRef = React.createRef();
  const [currentInterestsValue, setCurrentInterestsValue] = React.useState("");
  const interestsRef = React.createRef();
  const validations = {
    username: [{ type: "Required" }],
    name: [{ type: "Required" }],
    university: [{ type: "Required" }],
    skills: [],
    interests: [],
    image: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          username,
          name,
          university,
          skills,
          interests,
          image,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Users.copyOf(usersRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              name,
              university,
              skills,
              interests,
              image,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name: value,
              university,
              skills,
              interests,
              image,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="University"
        isRequired={true}
        isReadOnly={false}
        value={university}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              university: value,
              skills,
              interests,
              image,
            };
            const result = onChange(modelFields);
            value = result?.university ?? value;
          }
          if (errors.university?.hasError) {
            runValidationTasks("university", value);
          }
          setUniversity(value);
        }}
        onBlur={() => runValidationTasks("university", university)}
        errorMessage={errors.university?.errorMessage}
        hasError={errors.university?.hasError}
        {...getOverrideProps(overrides, "university")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              username,
              name,
              university,
              skills: values,
              interests,
              image,
            };
            const result = onChange(modelFields);
            values = result?.skills ?? values;
          }
          setSkills(values);
          setCurrentSkillsValue("");
        }}
        currentFieldValue={currentSkillsValue}
        label={"Skills"}
        items={skills}
        hasError={errors.skills?.hasError}
        setFieldValue={setCurrentSkillsValue}
        inputFieldRef={skillsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Skills"
          isRequired={false}
          isReadOnly={false}
          value={currentSkillsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.skills?.hasError) {
              runValidationTasks("skills", value);
            }
            setCurrentSkillsValue(value);
          }}
          onBlur={() => runValidationTasks("skills", currentSkillsValue)}
          errorMessage={errors.skills?.errorMessage}
          hasError={errors.skills?.hasError}
          ref={skillsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "skills")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              username,
              name,
              university,
              skills,
              interests: values,
              image,
            };
            const result = onChange(modelFields);
            values = result?.interests ?? values;
          }
          setInterests(values);
          setCurrentInterestsValue("");
        }}
        currentFieldValue={currentInterestsValue}
        label={"Interests"}
        items={interests}
        hasError={errors.interests?.hasError}
        setFieldValue={setCurrentInterestsValue}
        inputFieldRef={interestsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Interests"
          isRequired={false}
          isReadOnly={false}
          value={currentInterestsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.interests?.hasError) {
              runValidationTasks("interests", value);
            }
            setCurrentInterestsValue(value);
          }}
          onBlur={() => runValidationTasks("interests", currentInterestsValue)}
          errorMessage={errors.interests?.errorMessage}
          hasError={errors.interests?.hasError}
          ref={interestsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "interests")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              university,
              skills,
              interests,
              image: value,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || users)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || users) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
