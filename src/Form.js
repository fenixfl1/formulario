import React from 'react';
import {
    Form,
    Input,
    Radio,
    Col,
    Select,
    DatePicker,
    InputNumber
} from 'antd';

const formlayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
}

const { Option } = Select;

function Title(props) {
    return (
        <Col>
            <h3 style={{ marginLeft: '15%' }}>{props.title}</h3>
        </Col>
    );
}

function GeneralPart() {

    return (
        <>
            <Col>
                <Title title="Datos Generales" />

                <Col>
                    <div className="form-group">
                        <Form.Item
                            label="Codigo"
                            name="codigo"
                        >
                            <Input placeholder="Id Persona" />
                        </Form.Item>
                    </div>
                </Col>

                <Col>
                    <div className="form-inline">
                        <Col span={12}>
                            <div className="form-coltrol">
                                <Form.Item
                                    label="Cedula"
                                    name="cedula"
                                >
                                    <Input placeholder="Documento Identidad" />
                                </Form.Item>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="form-coltrol">
                                <Form.Item
                                    label="No. Pasaporte"
                                    name="pasaporte"
                                >
                                    <Input placeholder="Numero Pasaporte" />
                                </Form.Item>
                            </div>
                        </Col>
                    </div>
                </Col>

                <Col>
                    <div className="form-inline">
                        <Col span={12}>
                            <div className="form-coltrol">
                                <Form.Item
                                    label="Nombre"
                                    name="nombre"
                                >
                                    <Input placeholder="Nombre" />
                                </Form.Item>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="form-coltrol">
                                <Form.Item
                                    label="Apellido"
                                    name="apellido"
                                >
                                    <Input placeholder="Apellido" />
                                </Form.Item>
                            </div>
                        </Col>
                    </div>
                </Col>

                <Col>
                    <div className="form-inline">
                        <Col span={12}>
                            <div className="form-coltrol">
                                <Form.Item
                                    label="Apodo"
                                    name="apodo"
                                >
                                    <Input placeholder="Apodo" />
                                </Form.Item>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="form-coltrol">
                                <Form.Item
                                    label="Nacionalidad"
                                    name="nacionalidad"
                                >
                                    <Input placeholder="Nacionalidad" />
                                </Form.Item>
                            </div>
                        </Col>
                    </div>
                </Col>

                <Col>
                    <div className="form-inline">
                        <Col span={12}>
                            <div className="form-control">
                                <Form.Item
                                    label="Lugar Nac."
                                    name="nacimeinto"
                                >
                                    <Input placeholder="Lugar Nacimeinto" />
                                </Form.Item>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="form-inline">
                                <Col span={12} style={{ marginLeft: '70px' }}>
                                    <div className="form-control">
                                        <Form.Item
                                            label="Fecha Nac."
                                            name="fececha"
                                        >
                                            <DatePicker placeholder="Fecha Nacimeinto" />
                                        </Form.Item>
                                    </div>
                                </Col>

                                <Col span={6} style={{ marginRight: '-28px' }}>
                                    <div className="form-control-sm">
                                        <Form.Item
                                            label="Edad"
                                            name="edad"
                                        >
                                            <Input placeholder="Edad" />
                                        </Form.Item>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </div>
                </Col>

                <Col>
                    <div className="form-inline">
                        <Col span={12}>
                            <div className="form-control">
                                <Form.Item name="sexo" label="Sexo">
                                    <Radio.Group>
                                        <Radio value="M">Masculino</Radio>
                                        <Radio value="F">Femenino</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="form-control">
                                <Form.Item name="estado civil" label="Estado Civil">
                                    <Radio.Group>
                                        <Radio value="0">Soltero</Radio>
                                        <Radio value="1">Casado</Radio>
                                        <Radio value="2">Union Libre</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                        </Col>
                    </div>
                </Col>

                <Col>
                    <div className="form-group">
                        <Form.Item
                            name="select"
                            label="Cat. Solicitada"
                        >
                            <Select splaceholder="Please select a country">
                                <Option value="0">Opcion #1</Option>
                                <Option value="1">Opcion #2</Option>
                                <Option value="2">Opcion #3</Option>
                                <Option value="3">Opcion #4</Option>
                                <Option value="4">Opcion #5</Option>
                            </Select>
                        </Form.Item>
                    </div>
                </Col>
            </Col>
        </>
    );
}

function IngresoPart() {

    return (
        <Col>
            <Title title="Informacion de Ingreso" />

            <Col>
                <div className="form-group">
                    <Form.Item
                        label="Ocupacion"
                        name="ocupacion"
                    >
                        <Input placeholder="Ocupacion" />
                    </Form.Item>
                </div>
            </Col>

            <Col>
                <div className="form-inline">
                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Lugar Trabajo"
                                name="trabajo"
                            >
                                <Input placeholder="Lugar de Trabajo" />
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item name="tipo_empleo" label="Tipo Empleo">
                                <Radio.Group>
                                    <Radio value="0">Privado</Radio>
                                    <Radio value="1">Publico</Radio>
                                    <Radio value="2">Independiente</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                    </Col>
                </div>
            </Col>

            <Col>
                <div className="form-inline">
                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Posicion Empresa"
                                name="posicion_empr"
                            >
                                <Input placeholder="Posicion Empresa" />
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Fecha Ingreso"
                                name="fecha_ingreso"
                            >
                                <DatePicker />
                            </Form.Item>
                        </div>
                    </Col>
                </div>
            </Col>

            <Col>
                <div className="form-inline">
                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Actividad Economica"
                                name="id_actividad_econ"
                            >
                                <Input placeholder="ID Actividad Economica" />
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Actividad Economica"
                                name="actividad_econ"
                            >
                                <Input placeholder="Actividad Economica" />
                            </Form.Item>
                        </div>
                    </Col>
                </div>
            </Col>

            <Col>
                <div className="form-inline">
                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Supervissor"
                                name="supervisor"
                            >
                                <Input placeholder="Supervisor" />
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="form-inline">
                            <Col span={12} style={{ marginLeft: '74px' }}>
                                <div className="form-control">
                                    <Form.Item
                                        label="Año"
                                        name="tiempo_empr"
                                    >
                                        {/* <Input placeholder="Tiempo en la Empresa" /> */}
                                        <InputNumber />
                                    </Form.Item>
                                </div>
                            </Col>

                            <Col span={6} style={{ marginRight: '-28px' }}>
                                <div className="form-control-sm">
                                    <Form.Item
                                        label="Meses"
                                        name="meses"
                                    >
                                        <Select placeholder="Meses">
                                            <Option value="0">Opcion #1</Option>
                                            <Option value="1">Opcion #2</Option>
                                            <Option value="2">Opcion #3</Option>
                                            <Option value="3">Opcion #4</Option>
                                            <Option value="4">Opcion #5</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </div>
            </Col>

            <Col>
                <div className="form-group">
                    <Form.Item
                        label="Justificar"
                        name="justificar"
                    >
                        <Input.TextArea placeholder="Razon de Otros Ingresos" />
                    </Form.Item>
                </div>
            </Col>
        </Col>
    );
}

function PepsPart() {

    return (
        <Col>
            <Title title="PEPS" />

            <Col>
                <div className="form-inline">
                    <Col span={12}>
                        <div className="form-coltrol">
                            <Form.Item
                                label="PEP"
                                name="pep"
                            >
                                <Select placeholder="IND PEP">
                                    <Option value="0">Opcion #1</Option>
                                    <Option value="1">Opcion #2</Option>
                                    <Option value="2">Opcion #3</Option>
                                    <Option value="3">Opcion #4</Option>
                                    <Option value="4">Opcion #5</Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="form-coltrol">
                            <Form.Item
                                label="Estado"
                                name="estado"
                            >
                                <Select placeholder="Estado PEPS">
                                    <Option value="0">Opcion #1</Option>
                                    <Option value="1">Opcion #2</Option>
                                    <Option value="2">Opcion #3</Option>
                                    <Option value="3">Opcion #4</Option>
                                    <Option value="4">Opcion #5</Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </Col>
                </div>
            </Col>

            <Col>
                <div className="form-inline">
                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Cargo"
                                name="cargo"
                            >
                                <Input placeholder="Cargo PEP" />
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Decargo PEP"
                                name="decargo"
                            >
                                <Input placeholder="Decargo PEP" />
                            </Form.Item>
                        </div>
                    </Col>
                </div>
            </Col>

            <Col>
                <div className="form-inline">
                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Entidad"
                                name="entidad"
                            >
                                <Input placeholder="Entidad PEP" />
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Dentidad PEP"
                                name="dentidad"
                            >
                                <Input placeholder="Dentidad PEP" />
                            </Form.Item>
                        </div>
                    </Col>
                </div>
            </Col>

            <Col>
                <div className="form-inline">
                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="Fecha Inicio"
                                name="inicio"
                            >
                                <DatePicker format="YYYY-MM-DD" />
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className="form-control">
                            <Form.Item
                                label="FEcha Final"
                                name="final"
                            >
                                <DatePicker format="YYYY-MM-DD" />
                            </Form.Item>
                        </div>
                    </Col>
                </div>
            </Col>
        </Col>

    );
}

function MainForm() {

    return (
        <div style={{ marginTop: '20px' }}>
            <Form {...formlayout}>
                <GeneralPart />
                <IngresoPart />
                <PepsPart />
            </Form>
        </div>
    );
}

export default MainForm;